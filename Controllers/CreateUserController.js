
const User = require('../models/User');
const { validationResult} = require('express-validator');
const bcrypt=require('bcryptjs')
module.exports.Login=async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    const securePass=await(bcrypt.hash(req.body.password,salt))
    try{
        await User.create({
        name:req.body.name,
        password:securePass,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
    }
    catch(error){
        console.log(error);
        res.json({success:false});
    }
}