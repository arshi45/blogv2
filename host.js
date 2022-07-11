const express = require("express");
const app = express();

app.use(express.static(__dirname+"/public"));

app.get('*', (req, res) => {
    res.sendFile(__dirname+"public"+'/index.html');
 });

const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server is running on port"+port);
});