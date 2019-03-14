import React from 'react';


class Profile extends React.Component {





  render() {
    console.log(this.props);

    return (
        <h1> {this.props.UserEmail}</h1>

    )
  }
}


export default Profile;
