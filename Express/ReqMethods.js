const express = require('express')
const app = express();


app.use('/user',(req,res,next)=>{
    console.log('Request type is : ',req.method);
    console.log('Original url is :',req.originalUrl)
    console.log('Base url is : ',req.baseUrl);
    console.log('Path is : ',req.path);
    next();
});

app.get('/user',(req,res)=>{
    res.send('All details printed successfully.');
});

app.get('/user/hello/bro',(req,res)=>{
    res.send('All details printed successfully.');
});

app.listen(4140,()=>{
    console.log('Server started at 4140.')
});
