const mongoose = require('mongoose');
const BasicSchema = require('./BasicSchema');

const productSchema = new BasicSchema({
  _id: String,
  name: { type: Object, default: { en: 'No name yet' } },
  prices: [Object],
  images: { type: [Object] },
  createdAt: Date,
  createdBy: String,
  barCode: String,
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;
