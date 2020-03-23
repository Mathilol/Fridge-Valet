/* const {map } = require('lodash/fp');
const aws = require('aws-sdk');
const formidable = require('formidable');
const { Product } = require('../models/Product');

aws.config.update({
  secretAccessKey: '0GrzszJrBRRhLyxJ4GMfyJiZ+d0/ULmNdYoLIyPt',
  accessKeyId: 'AKIAJHBSMT63HQQZZMPQ',
  region: 'ap-southeast-1', // region of your bucket
});

const s3 = new aws.S3();

const uploadToS3Promise = params =>
  new Promise((resolve, reject) => {
    s3.upload(params, (error, data) => {
      error ? reject(error) : resolve(data);
    });
  }); */

module.exports = app => {
  app.get('/api/image', (req, res) => {
    res.send({});
  });
  /* app.post('/api/product/:productId/image/upload', (req, res) => {
    const { productId } = req.params;
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      Promise.all(
        map(file => {
          const key = `images/${productId}/${Random.id()}`;
          return Promise.all([
            uploadToS3Promise({
              StorageClass: 'STANDARD',
              Bucket: 'fridge-valet',
              Key: key,
              Body: gm(file.path)
                .resize(1024, 1024)
                .stream(),
              ContentType: file.type,
              ACL: 'public-read',
            }),
            uploadToS3Promise({
              StorageClass: 'STANDARD',
              Bucket: 'fridge-valet',
              Key: `${key}_original`,
              Body: fs.createReadStream(file.path),
              ContentType: file.type,
              ACL: 'public-read',
            }),
            uploadToS3Promise({
              StorageClass: 'STANDARD',
              Bucket: 'fridge-valet',
              Key: `${key}_small`,
              Body: gm(file.path)
                .resize(240, 240)
                .stream(),
              ContentType: file.type,
              ACL: 'public-read',
            }),
          ]);
        }, files),
      ).then(files => {
        Product.update(
          {
            _id: productId,
          },
          {
            $push: {
              images: {
                $each: map(
                  ([file, originalFile, smallFile]) => ({
                    src_small: smallFile.Location,
                    key_small: smallFile.Key,
                    src_original: originalFile.location,
                    key_original: originalFile.Key,
                    src: file.Location,
                    key: file.Key,
                  }),
                  files,
                ),
              },
            },
          },
        );

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(Product.findOne(productId)));
      });
    });
  }); */
};
