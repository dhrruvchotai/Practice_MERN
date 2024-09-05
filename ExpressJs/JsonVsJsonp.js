const express = require('express');
const app = express();

//this is route1
app.get('/user/file',(req,res)=>{
    res.sendFile('D:\\Study\\JavaScript\\Practice_MERN\\ExpressJs\\C Notes.pdf')
})

//this is route 2
app.get('/user1',(req,res)=>{
    const data = ({id:1,name:"DHRUV"});
    res.json(data);
});

//this is route3
app.get('/user2',(req,res)=>{
    const data = ({id:1,name:"DHRUV"});
    //  http://localhost:4140/user2?callback=myFunction  write this to get proper output for jsonp method.
    res.jsonp(data);
});

//route4
// app.get('/user/:nency/user2/:dhruv',(req,res) => {
//     res.send(req.params);
// });


app.listen(4140,()=>{
    console.log("Sever started at 4140.")
});
    