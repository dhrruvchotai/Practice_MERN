const express = require('express');
const app = express();

app.get('/user',(req,res)=>{
    const data = ({id:1,name:"DHRUV"});
    res.jsonp(data);
});

app.listen(4140,()=>{
    console.log("Sever started at 4140.")
});
