
const Order=require('../models/Orders')

module.exports.myorder=async(req,res)=>{

    try {
        
        let myData=await Order.findOne({email:req.body.email})
        res.json({orderData:myData})
    } catch (error) {
         res.send("Server Error",error.message)
    }
}