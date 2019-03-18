import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Login from '../auth/login'

const styles = theme =>({
});

class ContainedButtons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
      open:false,
      isMobile:this.props.mobile
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
  const {classes} = this.props
  let col = this.state.isMobile ? "inherit" : "secondary"
  return (
      <div>
      <Button data-toggle="modal" data-target="#login"  onClick={this.openModal} variant="contained" color={col}>
        Log In
      </Button>
      <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
       <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
           <Login setLoginStates={this.props.setLoginStates} logout={this.state.logout} />
         </div>
       </div>
     </div>
        {/*<Button variant="contained" color="secondary" style={{marginLeft:"1rem"}}>
          Donate
        </Button>*/}
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

export default withStyles(styles)(ContainedButtons);
