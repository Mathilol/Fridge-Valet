const Product = require('../models/Product');

module.exports = app => {
  app.post('/api/addProduct', async (req, res) => {
    const { name, price, shop, image } = req.body;
    const product = new Product({
      name,
      price,
      shop,
      image,
      dateAdded: Date.now(),
    });
    await product.save();
    res.send({ count: 5 });
  });
  app.get('/api/products', async (req, res) => {
    const products = await Product.find({});

    res.send(products);
  });
  app.get('/api/product/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.send(product);
    } catch (error) {
      res.status(404).send({ error: 'PRODUCT_NOT_FOUND' });
    }
  });

  app.get('/api/products/latest', async (req, res) => {
    const latestProducts = await Product.find({}, null, { limit: 9 }).sort(
      '-createdAt',
    );
    res.send(latestProducts);
  });

  app.get('/api/productcount', async (req, res) => {
    const productCount = await Product.countDocuments({});
    res.send({ count: productCount });
  });

  app.get('/api/products/shownproducts', async (req, res) => {
    const { length, searchQuery, sortingfield, sortingdirection } = req.query;
    console.log(
      JSON.stringify({
        name: new RegExp(`.*${searchQuery}.*`, 'i'),
        skip: parseInt(length, 10),
        limit: 10,
        sort: [sortingfield, sortingdirection],
      }),
    );
    const newShownProducts = await Product.find({
      'name.en': new RegExp(`.*${searchQuery}.*`, 'i'),
    })
      .sort([[sortingfield, sortingdirection]])
      .skip(parseInt(length, 10))
      .limit(10);
    res.send(newShownProducts);
  });
};
