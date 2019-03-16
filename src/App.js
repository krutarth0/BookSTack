import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
<<<<<<< HEAD
import { BrowserRouter as Router  } from 'react-router-dom'
=======
import { BrowserRouter as Router } from 'react-router-dom'
>>>>>>> pr/3

//navbar + drawer
import SideBar from './components/body/sidebar'

// components
import BaseRouter from './router.js'
import Navigation from './layout/Navigation'


//auth

// apollo client setup
const client = new ApolloClient({
    uri: 'http://35.154.49.7:4000/graphql'
});



class App extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
constructor(props) {
  super(props);
  this.state = {
=======
=======
>>>>>>> pr/3
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
<<<<<<< HEAD
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
>>>>>>> pr/3
    isSignedIn: false,
    UserEmail:null,
    UserEmailvarified: false,
    UserDisplayName:null,
    UserPhoneNumber:null,
    UserPhotoUrl:null
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
  });
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
  });
>>>>>>> pr/3

setLoginStates =(data,login)=>{
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
<<<<<<< HEAD



    return (
        <ApolloProvider client={client}>
          <Router>
<<<<<<< HEAD
          <React.Fragment>
              <Navigation {...this.state} setStates={this.setLoginStates} logout={this.logout}/>
              <BaseRouter {...this.state}  />
            </React.Fragment>
=======
            <div><SideBar {...this.props}/>
            <BaseRouter {...this.state} setLoginStates={this.setLoginStates} logout={this.logout}/></div>
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
    return (
        <ApolloProvider client={client}>
          <Router>
            <div><SideBar {...this.props}/>
            <BaseRouter {...this.state} setLoginStates={this.setLoginStates} logout={this.logout}/></div>
>>>>>>> pr/3
          </Router>
        </ApolloProvider>
    );
  }
}
export default App
