const express=require('express');
const app=express();
const mongoDB=require('./config/mongoose');
const cors=require('cors');
const port=9000;

mongoDB();

app.use(cors({
    origin: 'http://localhost:5173'
  }));

  const allowedOrigins = ["http://localhost:5173", "http://localhost:9000"];

app.use((req, res, next) => {
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
          res.setHeader("Access-Control-Allow-Origin", origin);
      }
      res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      next();
});
  
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"))
app.use('/user',require("./Routes/Login"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.use('/api',require("./Routes/MyOrderData"));


app.listen(port,(err)=>
{
        if(err)
            return err;
        console.log("Server run on port");
})