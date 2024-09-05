const express = require('express');
const router = express.Router();



// router.use((req, res, next) => {
//     console.log('Middleware function');
//     next();
// });

router.get('/', (req, res) => {
    res.send('Users');
});

router.get('/hello',(req,res) => {
    res.send('Hello from Users....')
})

router.get('/:id', (req, res) => {
    res.send(`User with ID: ${req.params.id}`);
});

module.exports = router;
