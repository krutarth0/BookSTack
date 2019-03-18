import React, { Component } from 'react';
import AddPost from '../components/body/addPost'


class Home extends Component {
  render() {

    return (
      <div style={{  display: 'flex', flexDirection: 'column'}}><AddPost /></div>
    );
  }
}
export default (Home);
