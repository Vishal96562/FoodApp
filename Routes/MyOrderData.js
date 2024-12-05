
const express=require('express');
const router=express.Router()
const MyOrderController=require('../Controllers/MyOrderController')

router.post('/myorder',MyOrderController.myorder);

module.exports=router;