const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users List');
});

router.get('/:id', (req, res) => {
    res.send(`User with ID: ${req.params.id}`);
});

module.exports = router;
