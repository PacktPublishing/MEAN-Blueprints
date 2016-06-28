'use strict';

const express = require('express');
const router = express.Router();
const auctionCtrl = require('../controllers/auction');
const response = require('../helpers/response');
// const auth = require('../middlewares/authentication');

router.get(
  '/auctions',
  auctionCtrl.getAll,
  response.toJSON('auctions')
);

router.get(
  '/auctions/:auctionId',
  auctionCtrl.findById,
  response.toJSON('auction')
);

module.exports = router;
