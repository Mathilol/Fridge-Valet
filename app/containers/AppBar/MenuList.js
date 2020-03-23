import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    border: '1px solid #d3d4d5',
  },
}));

const StyledMenu = props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
);

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={handleClick}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>

      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.paper}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={RouterLink} to="/addProduct">
          add product
        </MenuItem>
        <MenuItem onClick={handleClose} component={RouterLink} to="/products">
          products
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
