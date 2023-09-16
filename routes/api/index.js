const express = require('express');

const router = express.Router();

//forwarding according to api version
router.use('/v1',require('./v1'));

module.exports = router;