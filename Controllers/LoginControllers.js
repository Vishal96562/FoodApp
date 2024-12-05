const { validationResult} = require('express-validator');

const User = require('../models/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const jwtSecret="qwertyuiopasdfghjklzxcvbnmqwerty#@"
module.exports.user=async(req,res)=>{    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
    try{
       let userData= await User.findOne({email});
        if(!userData)
        {
            return res.status(400).json({errors:"Try logging with correct email"})
        }
      
        const passwordComp=await bcrypt.compare(req.body.password,userData.password);

        if(!passwordComp)
            {
                return res.status(400).json({errors:"Try logging with correct password"})
            }
        
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret); //jwt payload(data) and signature(jwtSecret random 32 bit code)

   return res.json({success:true,authToken:authToken})
    }
    catch(error){
        console.log(error);
        res.json({success:false});
    }
}