const express = require('express');
const app = express();

//route handlers
app.get('/user/:id',(req,res,next)=>{
    if(req.params.id == 0){
        console.log("Here id is = 0");
        next("route 0");
    }
    else next();
},(req,res,next)=>{
    res.send('regular');
    next();
});

app.get('user/:id',(req,res)=>{
    res.send('special');
});

//route paths based on regular patterns 
//1st
app.get('/*a*',(req,res)=>{
    res.send("This will match any occurance of a in the string.")
});
//2nd
app.get('/a/',(req,res)=>{
    res.send("This will match any occurance of a in the string.")
});
//This two means 1st and 2nd are diffent remember.


//Checkout this.
    app.get('/.^*a.*$',(req,res)=>{
        res.send("new")
    });

app.listen(4140,()=>{
    console.log("Server started at 4140.")
})