const router = require("express").Router();
const User = require("../models/user");         //The express.Router() function is used to create a 
                                                //new router object. This function is used when you 
                                                //want to create a new router object in your program 
                                                //to handle requests.
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {        //Post is used to store the data into the database
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),    //documenttion of encrypting teh passowrd using 
                                                                                                //the secret key stored in our dotenv
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email });                 //Here we check if there is any entry in our 
                                                                                   //database that has the same email as entered
                                                                                   //and the entry matching the condition will be returned
                                                                                   //and stored inside the const user
        !user && res.status(401).json("Wrong password or username");               //if user is empty then !user will be 1 and 
                                                                                    //1 && anything is anything

        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);   //documentation to decrypt
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong password or username");

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin}, 
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );
        const { password,...info } = user._doc;                                     //destructuring, because we dont want to show our 
                                                                                    //password when we send the entire user
       // console.log(user._doc);
        //console.log(user);

        res.status(200).json({...info, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router; 
 