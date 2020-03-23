const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCswpVW7G9vDa8n6Z_t-gcshBudHO2D_Y4',
  Promise,
});

const Shop = require('../models/Shop');

module.exports = app => {
  app.get('/api/nearbystores', async (req, res) => {
    const { latitude, longitude } = req.body;

    try {
      const response = await googleMapsClient
        .placesNearby({
          location: [latitude, longitude],
          rankby: 'distance',
          type: 'store',
          keyword: 'food',
        })
        .asPromise();
      // TODO save the Shops in the database and maybe change type to 'query: Grocery Store or food or something';

      res.send(response.json.results);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.get('/api/stores', async (req, res) => {
    const stores = await Shop.find({});
    res.send(stores);
  });

  app.get('/api/store/:id', async (req, res) => {
    const storeId = req.params.id;
    const response = await googleMapsClient
      .places({
        placeid: storeId,
      })
      .asPromise();

    res.send(response.json.results);
  });

  // TODO DO WE NEED TO SAVE WHOLE SHOP IN DATABASE?
};
