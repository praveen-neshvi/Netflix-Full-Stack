const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePic: {type: String, default:""},
    isAdmin: {type: Boolean, default: false}
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);     //The module.exports is a special object which is included in every JavaScript file 
                                                        //in the Node.js application by default. The module is a variable 
                                                        //that represents the current module, and exports is an object that 
                                                        //will be exposed as a module. So, whatever you assign to 
                                                        //module.exports will be exposed as a module.