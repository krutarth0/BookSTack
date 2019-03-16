import React, { Fragments } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


<<<<<<< HEAD
          try{
          if(this.props.bookId ){
            return(
                <div className="site-font">
                    <h2>{ book.title }</h2>
=======
  const styles = {
    appBar: {
      position: 'relative',
      maxHeight:"10rem",
    },
    flex: {
      flex: 1,
    },
    addShelf:{
      marginLeft: "60%"
    }
  };
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06



class BookDetails extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          open: this.props.open
      };
  }

  createModal(){
    var book = this.props.book
    const { classes } = this.props;
    console.log(this.state.open)
    return(
      <div>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.props.close}
            TransitionComponent={Transition}
          >
            <AppBar>
              <Toolbar>
                <IconButton
                color="inherit"
                onClick={this.props.close}
                aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography
                variant="h6"
                color="inherit">
                  {book.title} by {book.author}
                </Typography>
                <Button
                style={styles.addShelf}
                color="inherit"
                onClick={this.props.close}>
                  Add To Shelf
                </Button>
              </Toolbar>
            </AppBar>
            <div style={{marginTop:"7rem", marginLeft:"2rem",marginRight:"2rem"}}>
            <Typography
            variant="h5"
            color="inherit">
              <p>
                {book.description}
              </p>
            </Typography>
            </div>
            <Divider />
            <Typography
            variant="h3"
            color="inherit"
            >
              {book.genre}
            </Typography>
            <Divider />

          </Dialog>
      </div>
    )
  }



  render(){
      return(
          <div>
              {console.log(this.props)}
              { this.createModal() }
          </div>
      );
  }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(withStyles(styles)(BookDetails));
