/**
 * Created by MONA on 19/07/2017.
 */
var express = require('express');
var router = express.Router();



/* GET patient listing. */
router.get('/viewp/', function(req, res, next) {
  res.render('patient/view', { page_t : 'Patient' });
});

/* GET patient listing. */
router.get('/addp/', function(req, res, next) {
  res.render('patient/AddPatient', { page_t : 'AddPatient' });
});

/* GET patient listing. */
router.get('/viewh/', function(req, res, next) {
  res.render('patient/AddPatient', { page_t : 'Hospitals' });
});

/* GET patient listing. */
router.get('/viewstuff/', function(req, res, next) {
  res.render('patient/AddPatient', { page_t : 'View' });
});

/* GET patient listing. */
router.get('/', function(req, res, next) {
  res.render('patient/AddPatient', { page_t : 'Home' });
});


module.exports = router;
