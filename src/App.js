import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom'

//navbar + drawer
import SideBar from './components/body/sidebar'

// components
import BaseRouter from './router.js'


// apollo client setup
const client = new ApolloClient({
    uri: 'http://35.154.49.7:4000/graphql'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      UserEmail:null,
      UserEmailvarified: false,
      UserDisplayName:null,
      UserPhoneNumber:null,
      UserPhotoUrl:null
    }
  }

  setLoginStates =(data)=>{
      this.setState({
       isSignedIn: true,
       UserEmail:data.email,
       UserEmailvarified: data.emailVerified,
       UserDisplayName:data.displayName,
       UserPhoneNumber:data.phoneNumber,
       UserPhotoUrl:data.photoURL
     });

   }

  logout =()=>this.setState({
    isSignedIn: false,
    UserEmail:null,
    UserEmailvarified: false,
    UserDisplayName:null,
    UserPhoneNumber:null,
    UserPhotoUrl:null
  });

  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            <div><SideBar {...this.props}/>
            <BaseRouter {...this.state} setLoginStates={this.setLoginStates} logout={this.logout}/></div>
          </Router>
        </ApolloProvider>
    );
  }
}
export default App;
