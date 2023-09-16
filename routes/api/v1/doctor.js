const express = require('express');
const router = express.Router();

const doctorController = require('../../../controller/api/v1/doctor_controller');

router.post('/register',doctorController.create);
router.get('/login',doctorController.createSession);

module.exports = router;