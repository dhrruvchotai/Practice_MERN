const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');


const schema = mongoose.Schema({

    FullName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true }

});

const LoginUser = mongoose.model("LoginUser", schema);

const connStr = "mongodb+srv://DhruvChotai:Dhruv10@cluster0.5ssmx.mongodb.net/loginusers"

mongoose.connect(connStr).then(()=>{
    
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(express.static(path.join(__dirname, 'public')));

    app.post('/signin',async(req,res)=>{

        const {Email,Password} = req.body;

        const user = await LoginUser.findOne({Email,Password});

        if(user){
            res.send("SignIn Succesfull.");
        }
        else{
            res.send("Invalid UserName or Password");
        }

    });

    app.post('/signup',async(req,res)=>{

        const{FullName,Email,Password} = req.body;

        const newUser = new LoginUser(req.body);
        await newUser.save();
        
        res.send("SignUp Succesfully.")

    });


    app.listen(4140,()=>{
        console.log("Sever started at 4140.");
    });

});

