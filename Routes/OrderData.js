const express=require('express');
const router=express.Router();
const OrderController=require('../Controllers/OrderController')

router.post('/orderdata',OrderController.orderdata);

module.exports=router;