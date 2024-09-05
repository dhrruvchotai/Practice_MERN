const express = require('express');
const app = express();

app.get('/user',(req,res,next) => {
    next();
    res.send("Hello");
});

app.get('/user',(req,res,next) => {
    res.send("World");
}); 

app.listen(4140,()=>{
    console.log("Sever started at 4140.")
});

