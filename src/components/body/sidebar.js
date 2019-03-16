import React, {Fragments} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import TrendingUp from '@material-ui/icons/TrendingUp';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import WatchLater from '@material-ui/icons/WatchLater';
import Delete from '@material-ui/icons/Delete';
import Person from '@material-ui/icons/Person';
import {Link} from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ContainedButtons from './navabuttons'
import BookList from '../BookList';
import Paper from '@material-ui/core/Paper'
import W from "./W.jpeg"
import bgImg from "./S.jpg"
import Profile from './profile';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'
import Grid from "@material-ui/core/Grid"

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  profileImgCtn: {
    marginTop : "0.5rem",
    marginLeft : "0.5rem",
    height: 50,
    width: 50,
    borderRadius: 25,
    Shadow:20
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    Shadow:20
  },
});

class MiniDrawer extends React.Component {

  state = {
    open: false,
    variant : "permanent",
    isMobile : false,
    search:"Elon Musk",
    renderChange: 'Home',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  mouseInDrawer = (event)=>{
    this.setState({
      open: true
    })
  }

  mouseOutDrawer = (event)=>{
    this.setState({
      open: false
    })
  }

  componentDidMount(){
    if(window.innerWidth<768){
      this.setState({
        variant:""
      })
    }
  }

  render() {
    const isMobile = this.state.width <= 768
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          style={{ background: 'transparent', boxShadow: 'none'}}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            { isMobile ?
              <Fragments>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color="inherit" noWrap>
                BookSTack
              </Typography>
            </Fragments>:
            <Typography style={{marginLeft:"5rem"}} variant="h3" color="black" noWrap>
              <span className="logo-font">BookSTack</span>
            </Typography>
            }


            <div className={classes.search}>
              <div className={classes.searchIcon} onClick={this.handleClick}>
                <IconButton disabled={false} disableRipple={false}>
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.handleChange}
              />
            </div>
            <ContainedButtons {...this.props}/>
          </Toolbar>
        </AppBar>

        <Drawer
          variant = {this.state.variant}
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
          onMouseEnter={this.mouseInDrawer}
          onMouseLeave={this.mouseOutDrawer}
        >
        {
          this.state.isMobile ?
          <IconButton onClick={this.handleDrawerClose}>
          <ChevronRightIcon />
          </IconButton>
          : null
        }

          <Grid container cols={3}>
          <Grid item>
          <Paper elevation={8} className={classes.profileImgCtn}><img
          className={classes.profileImg}
          src={W}/></Paper>
          </Grid>
          <Grid item>
          <Typography variant='h6' style={{position:"absolute", marginLeft:"1rem",marginTop:"1rem"}}>UserName</Typography>
          </Grid>
          </Grid>

          <Divider style={{marginTop:"1rem"}}/>

          <List>
              <ListItem button component = {Link} to='/' key='Home'>
                <ListItemIcon>
                <Home />
                </ListItemIcon>
                <ListItemText primary= 'Home'/>
              </ListItem>
              <ListItem button key='Trending'>
                <ListItemIcon>
                <TrendingUp />
                </ListItemIcon>
                <ListItemText primary= 'Trending'/>
              </ListItem>
              <ListItem button key='My Shelf'>
                <ListItemIcon>
                <LibraryBooks />
                </ListItemIcon>
                <ListItemText primary= 'My Shelf'/>
              </ListItem>
              <ListItem button key='Pending'>
                <ListItemIcon>
                <WatchLater />
                </ListItemIcon>
                <ListItemText primary= 'Pending'/>
              </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem button component = {Link} to='/profile' key='My Profile'>
            <ListItemIcon>
            <Person />
            </ListItemIcon>
            <ListItemText primary='My Profile' />
          </ListItem>
          <ListItem button key='Trash'>
            <ListItemIcon>
            <Delete />
            </ListItemIcon>
            <ListItemText primary='Trash' />
          </ListItem>
          {this.props.isSignedIn ?
            <ListItem onClick={() => {
              firebase.auth().signOut()
              this.props.logout()
            }}  button key='Log Out'>
            <ListItemIcon>
            <Person />
            </ListItemIcon>
            <ListItemText primary='Log Out' />
          </ListItem>
        : null}
          </List>
            <div
              className={classes.background}
              style={{ backgroundColor:"black" }}
            />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
