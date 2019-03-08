import React from "react"

import Navigation from "../layout/Navigation";



import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
var config = {
 apiKey: "AIzaSyBdD-dZnTara6z3jjKOENeqWQJz8Lk53jQ",
 authDomain: "fir-auth-b1ee0.firebaseapp.com",
 // databaseURL: "https://fir-auth-b1ee0.firebaseio.com",
 // projectId: "fir-auth-b1ee0",
 // storageBucket: "fir-auth-b1ee0.appspot.com",
 // messagingSenderId: "519353952250"
};
firebase.initializeApp(config);


class Login extends React.Component{

state = {
  isSignedIn: false
}
    uiConfig = {
          signInFlow: "popup",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
          callbacks: {
            signInSuccess: () => false
          }
        }

    componentDidMount = () => {
          firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
          })
        }

    render(){
      return(
        <div style={{margin:"auto"}}>
                <Navigation/>

              {this.state.isSignedIn ? (
                <span>
                  <div>Signed In!</div>
                  <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                  <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                  <img
                    alt="profile pic"
                    src={firebase.auth().currentUser.photoURL}
                  />
                </span>
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </div>
    );
    }

}


export default Login;
