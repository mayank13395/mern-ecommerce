const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send(" hekko from server");
});

app.listen(9000,()=>{
 console.log("server running on port 9000");
});

