'use strict';

const express = require('express');
const router = express.Router();
const expenseCtrl = require('../controllers/expense');
const auth = require('../middlewares/authentication');

router.param('expenseId', expenseCtrl.findById);

router.get('/expenses', auth.bearer(), expenseCtrl.getAll);
router.get('/expenses/balance', auth.bearer(), expenseCtrl.getBalance);
router.get('/expenses/:expenseId', auth.bearer(), expenseCtrl.getOne);
router.post('/expenses', auth.bearer(), expenseCtrl.create);
router.put('/expenses/:expenseId', auth.bearer(), expenseCtrl.update);
router.delete('/expenses/:expenseId', auth.bearer(), expenseCtrl.delete);

module.exports = router;
