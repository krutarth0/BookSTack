import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Login from '../auth/login'
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({

});

class ContainedButtons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
      open:false,
    };
  }

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  openModal = () => {
    this.setState({ open: true });
  };

  render(){
  const open = Boolean(this.state.anchorEl);
  const { classes } = this.props;
  return (
      <div>
      <Button data-toggle="modal" data-target="#login"  onClick={this.openModal} variant="contained" color="secondary">
        Log In
      </Button>
      <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
       <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
           <Login setLoginStates={this.props.setLoginStates} logout={this.state.logout} />
         </div>
       </div>
     </div>
      <Button variant="contained" color="secondary" style={{marginLeft:"1rem"}}>
        Donate
      </Button>
      <Menu
      id="menu-appbar"
      anchorEl={this.state.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={this.handleClose}
    >
      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleClose}>My account</MenuItem>
    </Menu>
      </div>
  );
}
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
