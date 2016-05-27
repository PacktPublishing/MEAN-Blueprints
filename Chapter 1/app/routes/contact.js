'use strict';

var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact');
var auth = require('../middlewares/authentication');

router.param('contactId', contactController.findById);

router.post('/contacts', auth.ensured, contactController.createContact);
router.get('/contacts', auth.ensured, contactController.getContacts);
router.get('/contacts/:contactId', auth.ensured, contactController.getContact);
router.put('/contacts/:contactId', auth.ensured, contactController.updateContact);
router.delete('/contacts/:contactId', auth.ensured, contactController.deleteContact);

module.exports = router;
