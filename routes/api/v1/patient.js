const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('../../../config/passport-jwt-strategy');
const patientController = require('../../../controller/api/v1/patient_controller')


//after the jwt authenticates the doctor details then it forwards to respective controller
router.post('/register',passport.authenticate('jwt', {session: false}),patientController.create);
router.get('/create_report/:phone',passport.authenticate('jwt', {session: false}),patientController.report);
router.get('/all_reports',passport.authenticate('jwt', {session: false}),patientController.reportAll);
router.get('/update_status/:phone',passport.authenticate('jwt', {session: false}),patientController.updatestatus);
router.get('/status/:status',passport.authenticate('jwt', {session: false}),patientController.status);

module.exports = router;