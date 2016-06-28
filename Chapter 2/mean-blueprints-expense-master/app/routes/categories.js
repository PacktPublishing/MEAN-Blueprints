'use strict';

const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/category');
const auth = require('../middlewares/authentication');

router.param('categoryId', categoryCtrl.findById);

router.get('/categories', auth.bearer(), categoryCtrl.getAll);
router.get('/categories/:categoryId', auth.bearer(), categoryCtrl.getOne);
router.post('/categories', auth.bearer(), categoryCtrl.create);
router.put('/categories/:categoryId', auth.bearer(), categoryCtrl.update);
router.delete('/categories/:categoryId', auth.bearer(), categoryCtrl.delete);

module.exports = router;
