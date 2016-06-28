'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');
const ObjectId = mongoose.Types.ObjectId;

module.exports.create = createExpense;
module.exports.findById = findExpenseById
module.exports.getOne = getOneExpense;
module.exports.getAll = getAllExpenses;
module.exports.update = updateExpense;
module.exports.delete = deleteExpense;
module.exports.getBalance = getExpensesBalance;

function createExpense(req, res, next) {
  const data = _.pick(req.body, ['name', 'value', 'category', 'createdAt']);
  data.user = req.user.id;

  if (data.createdAt === null) {
    delete data.createdAt;
  }

  Expense.create(data, (err, expense) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(expense);
  });
}

function findExpenseById(req, res, next, id) {
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Not found.'});
  }

  Expense.findById(id, (err, expense) => {
    if (err) {
      return next(err);
    }

    if (!expense) {
      return res.status(404).json({ message: 'Not found.'});
    }

    req.expense = expense;
    next();
  });
}

function getOneExpense(req, res, next) {
  if (!req.expense) {
    return res.status(404).json({ message: 'Not found.'});
  }

  res.json(req.expense);
}

function getAllExpenses(req, res, next) {
  const limit = +req.query.limit || 30;
  const skip = +req.query.skip || 0;
  const query = {};

  if (req.category) {
    query.category = req.category.id;
  } else {
    query.user = req.user.id;
  }

  if (req.query.startDate) {
    query.createdAt = query.createdAt || {};
    query.createdAt.$gte = new Date(req.query.startDate);
  }

  if (req.query.endDate) {
    query.createdAt = query.createdAt || {};
    query.createdAt.$lte = new Date(req.query.endDate);
  }

  if (req.query.category) {
    query.category = req.query.category;
  }

  Expense
  .find(query)
  .limit(limit)
  .skip(skip)
  .sort({ createdAt: 'desc' })
  .populate('category')
  .exec((err, expenses) => {
    if (err) {
      return next(err);
    }

    res.json(expenses);
  });
}

function updateExpense(req, res, next) {
  const data = _.pick(req.body, ['name', 'value', 'category', 'createdAt']);
  const expense = req.expense;

  if (data.createdAt === null) {
    delete data.createdAt;
  }

  _.assign(expense, data);

  expense.save((err, updatedExpense) => {
    if (err) {
      return next(err);
    }

    res.json(updatedExpense);
  });
}

function deleteExpense(req, res, next) {
  req.expense.remove((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
}

function getExpensesBalance(req, res, next) {
  Expense.getBalance({
    user: req.user._id,
    category: req.query.category,
    startDate: req.query.start,
    endDate: req.query.end
  }, (err, result) => {
    if (err) {
      return next(err);
    }

    res.json(result);
  });
}
