const express = require('express');
const app = express();

// Import routes
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.get('/',(req,res)=>{
   res.redirect('/home')  //if only / occurs it will redirect it to the /home and / route in it.
});

// Use routes
app.use('/home', homeRoutes);
app.use('/users', userRoutes);

app.listen(4140, () => {
    console.log('Server started at 4140.');
});
