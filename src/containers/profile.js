import React from 'react';
import firebase from "firebase"

class Profile extends React.Component {





  render() {

    var user = firebase.auth().currentUser;
    console.log(user)
    return (
      <div>
      <h1> {user.displayName}</h1>
        <h4> {user.email}</h4>
        <img src={user.photoURL}/>
        </div>

    )
  }
}


export default Profile;
