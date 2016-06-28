'use strict';

const logger = require('../config/winston').init();
const mongoose = require('../config/mongoose').init();
const Auction = require('../app/models/auction');

const DATA = [
  {
    item: { title: 'Batman Gloves', slug: 'batman-gloves' },
    startingPrice: { display: '199.99' },
    minAmount: { display: '0.99' }
 },
 {
    item: { title: 'Batman Boots', slug: 'batman-boots' },
   startingPrice: { display: '299.99' },
   minAmount: { display: '0.99' }
 }
];

seed();

function seed() {
  DATA.forEach((d) => {
    Auction.create(d, (err, auction) => {
      if (err) {
        return console.log(err);
      }

      console.log('done', auction._id);
    });
  });
}
