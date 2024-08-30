const express = require('express');
const app = express();

//This is middleware.
app.use((req,res,next)=>{
    res.send("Hello from the middleware.")
})

//This will never be executed because in middleware you ended the response by res.send
//if you have written console.log and then called the next function then the route gets executed.
//and note that middlewares are always gets executed before any of the route.
app.get("/",(req,res)=>{
    res.send('Hello world!');
});

app.listen(4140,()=>{
    console.log("Sever started at 3400.")
});