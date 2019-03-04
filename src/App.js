import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
 import BookList from './components/BookList';
// import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://35.154.49.7:4000/graphql'
});

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      xsearch: "",
      search:"outer space"
    }
  }
  handleChange = (event)=>{
    this.setState({
      xsearch: event.target.value
    })
  }
  handleClick = (event)=>{
    this.setState({
      search: this.state.xsearch
    })
  }
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1 className="logo-font">Book STack </h1>
                <div style={{textAlign:"center"}}>
                <input type ="text" onChange={this.handleChange} />
                <input type ="button" value="Search" onClick={this.handleClick} />

                </div>
                {console.log(this.state.search)}
                <BookList search={this.state.search}/>
            </div>
        </ApolloProvider>
    );
  }
}
export default App;
