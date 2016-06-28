'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const ObjectId = mongoose.Types.ObjectId;

module.exports.findById = findCategoryById;
module.exports.create = createCategory;
module.exports.getOne = getOneCategory;
module.exports.getAll = getAllCategories;
module.exports.update = updateCategory;
module.exports.delete = deleteCategory;

function findCategoryById(req, res, next, id) {
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Not found.'});
  }

  Category.findById(id, (err, category) => {
    if (err) {
      return next(err);
    }

    if (!category) {
      return res.status(404).json({ message: 'Not found.'});
    }

    req.category = category;
    next();
  });
}

function createCategory(req, res, next) {
  const data = req.body;
  data.owner = req.user.id;

  Category.create(data, (err, category) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(category);
  });
}

function getOneCategory(req, res, next) {
  res.json(req.category);
}

function getAllCategories(req, res, next) {
  Category.find((err, categories) => {
    if (err) {
      return next(err);
    }

    res.json(categories);
  });
}

function updateCategory(req, res, next) {
  const category = req.category;
  const data = _.pick(req.body, ['description', 'name']);
  _.assign(category, data);

  category.save((err, updatedCategory) => {
    if (err) {
      return next(err);
    }

    res.json(updatedCategory);
  });
}

function deleteCategory(req, res, next) {
  req.category.remove((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
}
