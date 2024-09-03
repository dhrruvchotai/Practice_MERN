const express = require('express');
const app = express();

//route handlers
app.get('/user/:id',(req,res,next)=>{
    if(req.params.id == 0){
        console.log("Here id is = 0");
        next('route'); //This will directly skip to the next route.
    }
    else next();
},(req,res,next)=>{
    res.send('regular');
});

app.get('/user/:id',(req,res,next)=>{
    res.send('special');
});


app.listen(4140, () => {
    console.log('Server started at 4140.');
});