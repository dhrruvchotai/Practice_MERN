const express = require('express');
const app = express();
const router = express.Router();

// Middleware that applies only to routes handled by this router
router.use((req, res, next) => {
    console.log('Request Time:', Date.now());
    next();
});

router.get('/dashboard', (req, res) => {
    res.send('User Dashboard');
});

app.use('/user', router);

app.listen(4140, () => {
    console.log('Server started at 4140.');
});
