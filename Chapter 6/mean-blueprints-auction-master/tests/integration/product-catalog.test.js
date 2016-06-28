'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const config = require('../../config/environments/test');
const ProductCatalog = require('../../core/services/product-catalog');

describe('Product catalog', () => {
  let mongoose;
  let Product;
  let productCatalog;
  let productData = {
    sku: 'MEANB',
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
    productCatalog = new ProductCatalog();
    Product = mongoose.model('Product');
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

  it('should add a new product to the catalog', done => {
    productCatalog.add(productData, (err, product) => {
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

  it('should edit an existing product identified by SKU', done => {
    productCatalog.edit('MEANB', {
      title: 'M.E.A.N. Blueprints by Robert Onodi'
    }, (err, product) => {
      if (err) throw err;

      let prod = product.toObject();

      should.exist(prod);
      prod.title.should.equal('M.E.A.N. Blueprints by Robert Onodi');
      prod.description.should.equal('A book about building applications on the M.E.A.N. stack');
      prod.details.title.should.equal('M.E.A.N. Blueprints');
      prod.details.description.should.equal('A book about building applications on the M.E.A.N. stack');
      prod.details.author.should.equal('Robert Onodi');
      prod.price.display.should.equal(23.99);
      prod.price.currency.should.equal('USD');
      prod.__v.should.equal(1);
      done();
    });
  });

  it('should list all items from the product catalog', done => {
    productCatalog.list((err, products) => {
      if (err) throw err;

      products.length.should.equal(1);
      done();
    });
  });
});
