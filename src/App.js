import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

//navbar + drawer
import SideBar from './components/header/sidebar'

// components
import BaseRouter from './router.js'

import MobileAppBar from './components/header/mobileAppBar'

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
      UserPhotoUrl:null,
      isMobile : false,
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

  componentDidMount(){
    if(window.innerWidth<768){
      this.setState({
        variant:"temporary",
        isMobile : true
      })
    }
  }

  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            <Grid container cols={2}>
            {
              this.state.isMobile ?
              <MobileAppBar /> : 
              <SideBar {...this.props}/>}
            <BaseRouter {...this.state} setLoginStates={this.setLoginStates} logout={this.logout}/></Grid>
          </Router>
        </ApolloProvider>
    );
  }
}
export default App;
