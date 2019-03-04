import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    constructor(props){
      super(props)

    }
    displayBookDetails(){
        var book = this.props.data.book;
        try {
          console.log(book)
          if(this.props.bookId !== null ){
            return(
                <div className="site-font">

                    <h2>{ book.name }</h2>
                    <h4>genre : </h4>
                    {book.genre.map(item => {
                      return <p>{ item }</p>
                    })}

                    <h4>author : </h4>
                    {book.author.map(item => {
                      return <p>{ item }</p>
                    })}

                    <p>{book.description}</p>
                </div>
            );
          }
          else{
            return (<h1>SO Sorry about that, we're still devloping...</h1>)
          }
        } catch (e) {
          console.log("soryy")
            return (<h1 id="err">no data found..</h1>)
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
