const mongoose = require('mongoose');
const BasicSchema = require('./BasicSchema');

const shopSchema = new BasicSchema({
  storeId: String,
  storeName: String,
});

const Shop = mongoose.model('shops', shopSchema);

module.exports = Shop;
