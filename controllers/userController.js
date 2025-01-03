const User = require("../models/user")
const getAllUser = async (req , res)=>{
    try{
      const users = await User.find({}).select("-password") // to prevent password from appearance using - and attribute name
      if(!users){
        res.status(400).json({message : "No users found"}) ;
      }
      res.status(200).json(users);
    }catch(err){
      res.status(500).json({message : err.message}) ;
    }
}

module.exports = {getAllUser,}