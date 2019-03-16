import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import Cards from "./body/card"
import "./css/cardGrid.css"
import BookDetails from './BookDetails';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        var data = this.props.data;
        try{
            if(data.loading){return( <div>Loading books...</div> );}
              else {
<<<<<<< HEAD
                   return data.books.map(book => {
                        return(<li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.title }</li>);
                    })
=======
                   return (
                     <Grid container spacing={40}>
                     {data.book.map(book => {
                        return(
                          <Grid item>
                          <Cards
                            id={book.id}
                            title={book.title}
                            description={book.description}
                            ts={book.textSnippet}
                          />
                          </Grid>
                        );
                    })}
                    </Grid>
                  )
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
                }
            }
        catch(err){console.log(err);}

    }
    render(){
        return(
            <div>
                { this.displayBooks() }
            </div>
        );
    }
}

export default graphql(getBooksQuery,{
  options: (props)=>{
    return{
        variables:{
          search:props.search,
          howmany: 25
        }
    }
  }
})(withStyles(styles)(BookList));
