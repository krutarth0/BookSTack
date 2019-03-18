import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
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
  Title:{
  fontSize:40,
  fontFamily:'Lato'
  },
  Content:{
  padding:"5px",
  fontSize:30,
  fontFamily:'Nunito',
  lineHeight:"40px"
  },
});

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      title:'',
      content:'',
    };
  }

  handleChange = () => {
    this.setState(state => ({ checked: !this.state.checked }));
  };

  saveForm = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.getAttribute('name')]: event.target.value,
    });
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
            <Paper  elevation={7} className={classes.paper} style={{marginLeft:"10vw",height:"80vh", width:"80vw"}}>
              <Grid item>
                <form>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                  <TextField
                  onChange={this.saveForm}
                  autoFocus={true}
                  name='title'
                  type="text"
                  placeholder="Enter Post Title"
                  variant="outlined"
                  fullWidth={true}
                  InputProps={{
                    classes: {
                      input: classes.Title,
                    },
                  }}
                  />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                  <TextField
                  onChange={this.saveForm}
                  margin='normal'
                  name='content'
                  type="text"
                  placeholder="Enter Book Summary That You Made"
                  variant="outlined"
                  fullWidth={true}
                  multiline={true}
                  rows={14}
                  InputProps={{
                    classes: {
                      input: classes.Content,
                    },
                  }}
                  />
                  </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Fade>
        </div>
      </div>
      <Fab
          style={{backgroundColor:"#f50057",borderRadius:"5rem",width: "10rem",height:"5rem",marginLeft:width,marginTop:height,}}
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.handleChange}
          aria-label="Collapse"
        >
          <AddIcon />
          Add Post
        </Fab>
        </div>

    );
  }
}


export default withStyles(styles)(AddPost)
