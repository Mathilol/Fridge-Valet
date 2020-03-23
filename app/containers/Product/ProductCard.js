import { Link as RouterLink, Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import _ from 'lodash';

const ProductCard = ({ product }) => {
  let imageSrc = 'https://lorempixel.com/100/190/nature/6';
  if (!_.isEmpty(product.images[0])) {
    imageSrc = product.images[0].src_small;
  }
  return (
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
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
