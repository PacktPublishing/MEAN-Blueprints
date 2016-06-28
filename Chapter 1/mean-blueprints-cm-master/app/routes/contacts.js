'use strict';

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const auth = require('../middlewares/authentication');

router.param('contactId', contactController.findById);

router.post('/contacts', auth.ensured, contactController.create);
router.get('/contacts', auth.ensured, contactController.getAll);
router.get('/contacts/:contactId', auth.ensured, contactController.getOne);
router.put('/contacts/:contactId', auth.ensured, contactController.update);
router.delete('/contacts/:contactId', auth.ensured, contactController.remove);

module.exports = router;
