const express=require('express');
const router=express.Router()
const { body} = require('express-validator');

const CreateUserController=require('../Controllers/CreateUserController');

router.post('/createuser',
    [body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 })],
    CreateUserController.Login);

module.exports=router;