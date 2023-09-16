const express = require('express');

const router = express.Router();

//forwards to each individual routes
router.use('/doctors',require('./doctor'));
router.use('/patients',require('./patient'));


module.exports = router;