const express = require('express');
const app = express();

//route paths based on regular patterns 
//1st
app.get('/*a*',(req,res)=>{
    res.send("This will match any occurance of a in the string. /*a*")
});
//2nd
app.get('/a/',(req,res)=>{
    res.send("This will match any occurance of a in the string. /a/")//This is not working currently check it out later.
});
//This two means 1st and 2nd are different remember.


//Checkout this.
app.get('/.^*a.*$',(req,res)=>{
        res.send("new")
});

app.listen(4140,()=>{
    console.log("Server started at 4140.")
})