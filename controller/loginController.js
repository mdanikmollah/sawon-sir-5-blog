const bcrypt = require('bcrypt');
const User = require("../model/userModel.js")
let login = async (req,res)=>{
    let { email, password } = req.body;
    if (email == "" || email == undefined) {
        return res.send("Email is required");
     // }else if (!pattern.test(email)) {
     //     return res.send("Email is invalid");
      }else if (password == "" || password == undefined) {
        return res.send("Password is required");
     }
     
     let existingUser = await User.findOne({email:email})
     if (existingUser == null) {
         return res.send("We do not find any account with this email")
     }
    
     bcrypt.compare(password, existingUser.password, function(err, result) {
        if (result) {
            console.log(existingUser);
            if (existingUser.emailVerify) {
                res.send({
                message:"Login successful",
                id: existingUser._id,
                email:existingUser.email
            })
            }else{
                return res.send("Please Verify Your Email")
            }
            
        }else{
            res.send("wrong password")
        }
    });
}

module.exports = login;