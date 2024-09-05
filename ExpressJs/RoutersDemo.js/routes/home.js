const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/hello', (req, res) => {
    res.send('Hello from home...');
});

module.exports = router;
