const express=require('express');
const router=express.Router();
const { body} = require('express-validator');

const Logincontroller=require('../Controllers/LoginControllers');

router.post('/login',
    [body('email').isEmail(),body('password','Incorrect Password').isLength({ min: 5 })]
    ,Logincontroller.user);

module.exports=router;