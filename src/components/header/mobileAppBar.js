import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import Person from '@material-ui/icons/Person';
import VpnKey from '@material-ui/icons/VpnKey';

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 1
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  topBar:{
    background: 'inherit',
    zIndex:1,
   boxShadow: 'none',
  }
});

const messages = [];

class MobileAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { classes } = this.props;

    return (
    <React.Fragment>
    <AppBar position="static" color="inherit" className={classes.topBar}>
      <Toolbar className={classes.toolbar}>
      <Typography variant="h3" noWrap>
        <span className="logo-font">BookSTack</span>
      </Typography>
      </Toolbar>
    </AppBar>

      <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton component = {Link} to='/' key='Home' color="inherit">
            <HomeIcon /> Home
          </IconButton>
          <IconButton color="inherit">
          <TrendingUp /> Trending
          </IconButton>
          <IconButton
          aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
           color="inherit">
          <MenuIcon /> Menu
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
            component = {Link}
            to='/profile'
            onClick={this.handleClose}>
            <Person /> Profile
            </MenuItem>
            <MenuItem
            onClick={this.handleLogin}>
            <VpnKey/>Login
            </MenuItem>

            {this.props.isSignedIn ?
              <MenuItem onClick={() => {
                firebase.auth().signOut()
                this.props.logout()
              }}>Logout</MenuItem> :
              null}
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
}

MobileAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileAppBar);
