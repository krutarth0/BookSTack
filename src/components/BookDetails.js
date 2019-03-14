import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails(){
        var book = this.props.data.book;


          try{
          if(this.props.bookId ){
            return(
                <div className="site-font">
                    <h2>{ book.title }</h2>

                    <h4>genre : </h4>
                      {book.genre!==null ?book.genre.map(item =>{return <p key="item1">{ item }</p>}):<p key="item1">no genre found</p>}

                    <h4>author : </h4>
                    {book.author!==null ? book.author.map(item => {return <p key="item2">{ item }</p>}) : <p key="item2">no detail about author</p>}

                    <h4>description</h4>
                    {book.description!==null ? <p key="item3">{book.description}</p> :<p key="item3"> no description</p> }
                </div>
            )
          }
      }
      catch (err){
        console.log(err);
      }
    }
    render(){
        return(
            <div id="book-details">
                { this.displayBookDetails() }
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
})(BookDetails);
