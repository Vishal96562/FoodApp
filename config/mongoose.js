const mongoose=require('mongoose');
const mongoURI='mongodb+srv://food:manthan123@cluster0.rwnq6.mongodb.net/gotomern?retryWrites=true&w=majority&appName=Cluster0'

// const mongoDB=async()=>{
//    await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//     if(err) 
//         consolr.log(err);
//     else
//         console.log("connected");
//      })
// }k
async function mongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');

    // Ensure the correct collection name is used
    const fetch_data = mongoose.connection.db.collection("food_itmes");
    const category = mongoose.connection.db.collection("foodCategory");
    // Await the result of `toArray` to get the data
    const data = await fetch_data.find({}).toArray();
    const catData = await category.find({}).toArray();

    // console.log(data);
    global.food_data=data;     //global key word is use so that it is avaliable all over web page
    global.foodCategory=catData;
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

  }
  


module.exports=mongoDB;