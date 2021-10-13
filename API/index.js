//Initialise all the packages by requiring them and assigning them to constants

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");  
const authRoute = require("./routes/auth");                            //dotenv allows you to separate secrets from your source code
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");

dotenv.config();                                               //config will read your .env file, parse the contents, assign it to process.env

mongoose.connect(process.env.MONGO_URL,{     
    useNewUrlParser: true,                                      //Since the old URL parser has been deprecated, enter this option to use New version of UrlParser
                                                                //parser resolves a part into its components
    useUnifiedTopology: true,
})
.then( () => console.log("DB connection successful!")) 
.catch( (err)=> console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);

app.listen(8800, ()=> {                                         //app.listen() is used to connect the ports to the host
    console.log("Backend Server is Up");                         
});