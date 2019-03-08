import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom'



// components
import BaseRouter from './router.js'


// apollo client setup
const client = new ApolloClient({
    uri: 'http://35.154.49.7:4000/graphql'
});

class App extends Component {

  render() {
    return (

        <ApolloProvider client={client}>
          <Router>
      
            <BaseRouter/>
          </Router>
        </ApolloProvider>
    );
  }
}
export default App;
