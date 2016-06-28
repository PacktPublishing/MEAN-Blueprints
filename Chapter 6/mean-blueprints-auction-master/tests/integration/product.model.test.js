'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const config = require('../../config/environments/test');

describe('Product model', () => {
  let mongoose;
  let Product;
  let _product;
  let productData = {
    title: 'M.E.A.N. Blueprints',
    description: 'A book about building applications on the M.E.A.N. stack',
    price: {
      display: 23.99
    },
    details: {
      title: 'M.E.A.N. Blueprints',
      description: 'A book about building applications on the M.E.A.N. stack',
      author: 'Robert Onodi'
    }
  };

  before(done => {
    mongoose = require('../../config/mongoose').init();
    Product = require('../../core/models/product');
    done();
  });

  after(done => {
    Product.remove({}).exec(err => {
      if (err) throw err;

      mongoose.connection.close(() => {
        setTimeout(function() { done(); }, 1000);
      });
    });
  });

  it('should create a new product', done => {
    Product.create(productData, (err, product) => {
      if (err) throw err;
      let prod = product.toObject();

      should.exist(prod);
      prod.title.should.equal('M.E.A.N. Blueprints');
      prod.description.should.equal('A book about building applications on the M.E.A.N. stack');
      prod.details.title.should.equal('M.E.A.N. Blueprints');
      prod.details.description.should.equal('A book about building applications on the M.E.A.N. stack');
      prod.details.author.should.equal('Robert Onodi');
      prod.price.display.should.equal(23.99);
      prod.price.currency.should.equal('USD');
      done();
    });
  });

});
