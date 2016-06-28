'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const config = require('../../config/environments/test');
const InventoryManager = require('../../core/services/inventory-manager');

describe('Inventory manager', () => {
  let mongoose;
  let inventoryManager;
  let Inventory;
  let ObjectId;

  before(done => {
    mongoose = require('../../config/mongoose').init();
    inventoryManager = new InventoryManager();
    Inventory = mongoose.model('Inventory');
    done();
  });

  after(done => {
    Inventory.remove({}).exec(err => {
      if (err) throw err;

      mongoose.connection.close(() => {
        setTimeout(function() { done(); }, 1000);
      });
    });
  });

  it('should create an inventory item for a product', done => {
    inventoryManager.create({
      sku: 'MEANB',
      qty: 1
    }, (err, inventoryItem) => {
      if (err) throw err;

      should.exist(inventoryItem);
      inventoryItem.sku.should.equal('MEANB');
      inventoryItem.qty.should.equal(1);
      done();
    });
  });

  it('should not reserve an item if there is not enough on stock', done => {
    inventoryManager.reserve('MEANB', new mongoose.Types.ObjectId(), 2, (err, result) => {
      should.not.exist(result);
      should.exist(err);
      err.message.should.equal('Stock lever is lower then the desired quantity.');
      err.status.should.equal(409);
      err.type.should.equal('not_enough_stock_units')
      done();
    });
  });

  it('should increase the quantity for an inventory unit', done => {
    inventoryManager.increase('MEANB', 5, (err, inventory) => {
      if (err) throw err;

      inventory.qty.should.equal(6);
      done();
    });
  });

  it('should decrease the quantity for an inventory unit', done => {
    inventoryManager.decrease('MEANB', 2, (err, inventory) => {
      if (err) throw err;

      inventory.qty.should.equal(4);
      done();
    });
  });

  it('should reserve an item if there is enough on stock', done => {
    inventoryManager.reserve('MEANB', new mongoose.Types.ObjectId(), 2, (err, result) => {
      if (err) throw err;

      should.exist(result);
      result.sku.should.equal('MEANB');
      done();
    });
  });
});
