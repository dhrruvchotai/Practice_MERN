const express = require('express');
const app = express();

app.get("/user",(req,res,next)=>{

    console.log("Hello from function1.");
    next();

},(req,res,next)=>{

    console.log("Hello from function2.");
    res.send("hello"); //1.
    next(); //2.

    // change the sequence of line1 and line2 see the ouput

});

app.get("/user",(req,res)=>{
    res.send("Response ended successfully.");
});

app.get('/user/:id',(req,res)=>{
    res.send("This is a id route.")
});

app.listen(4140,()=>{
    console.log("Sever started at 4140.")
});