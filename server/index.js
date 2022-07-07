const express = require("express");
const db = require("./db");
const cors  = require("cors");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', function(req,res){
    console.log(req.body);
    res.send("Success");
});


app.listen( 3000 || env.PORT ,function(err){
    if(err)
    console.log(err);
    else
    console.log("Server is running on port 3000");
});

