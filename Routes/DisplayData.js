const express=require('express');
const router=express.Router()



router.post('/foodData',(req,res)=>{
    try{
          res.send([global.food_data,global.foodCategory]);
    }
    catch(error){
           res.send("Server error")
    }
})

module.exports=router;