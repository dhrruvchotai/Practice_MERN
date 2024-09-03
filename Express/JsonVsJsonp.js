const express = require('express');
const app = express();


app.get('/user1',(req,res)=>{
    const data = ({id:1,name:"DHRUV"});
    res.json(data);
});

app.get('/user2',(req,res)=>{
    const data = ({id:1,name:"DHRUV"});
    //  http://localhost:4140/user2?callback=myFunction  write this to get proper output for jsonp method.
    res.jsonp(data);
});

app.listen(4140,()=>{
    console.log("Sever started at 4140.")
});
    