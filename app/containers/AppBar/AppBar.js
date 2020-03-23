import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Link, IconButton, Badge } from '@material-ui/core';
import { Cart } from 'mdi-material-ui';

import MenuList from './MenuList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar title="my APP" position="static">
        <Toolbar>
          <MenuList />
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link
              component={RouterLink}
              color="inherit"
              style={{ textDecoration: 'none' }}
              to="/"
            >
              Fridge Valet
            </Link>
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary" badgeContent="0">
              <Cart />
            </Badge>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
