const express = require('express');
const app = express();
const router = express.Router();

// Define routes using the router obj
router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/about', (req, res) => {
    res.send('About Page');
});

// Use the router obj in your main app
app.use('/', router);  //This is ** MUST **.

app.listen(4140, () => {
    console.log('Server started at 4140.');
});
