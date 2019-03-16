import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
const styles = theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'absolute',
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class AddPost extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };


  render() {
    const { classes } = this.props;
    const width = window.innerWidth - 190
    const height = window.innerHeight - 400

    return (
      <div>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fade direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
            <Paper  elevation={4} className={classes.paper} style={{height:"30rem"}}>
              <Grid container cols={4}>
              <Grid item>
              <Paper style={{marginLeft:"60vw"}}>
                <form>
                <Grid container cols={4}>
                <Grid item >
                  <h3 style={{marginRight:"0.5rem"}}>Enter Post Title</h3></Grid>
                  <Grid item ><TextField
                  type="text"
                  placeholder="Enter Post Title"
                  margin="normal"
                  placeholder={true}
                  variant="outlined"
                  />
                  </Grid>
                  </Grid>
                </form>
              </Paper>
              </Grid>
              </Grid>
            </Paper>
          </Fade>
        </div>
      </div>
      <Fab
          style={{borderRadius:"5rem",width: "10rem",height:"5rem",marginLeft:width,marginTop:height,}}
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.handleChange}
          aria-label="Collapse"
        >
          <AddIcon className={classes.extendedIcon} />
          Add Post
        </Fab>
        </div>

    );
  }
}


export default withStyles(styles)(AddPost)
