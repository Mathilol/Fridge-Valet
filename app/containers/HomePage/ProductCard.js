import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import _ from 'lodash';

const ProductCard = ({ product }) => {
  let imageSrc = 'https://lorempixel.com/100/190/nature/6';
  if (!_.isEmpty(product.images[0])) {
    imageSrc = product.images[0].src_small;
  }
  return (
    <Grid item key={product._id}>
      <Card>
        <CardActionArea>
          <Link
            component={RouterLink}
            color="inherit"
            style={{ textDecoration: 'none' }}
            to={`/product/${product._id}`}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={imageSrc}
              title={product.name.en}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name.en}
              </Typography>
              <Typography component="p">{product.shop}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            <Link
              component={RouterLink}
              color="inherit"
              style={{ textDecoration: 'none' }}
              to={`/product/${product._id}`}
            >
              product info
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
