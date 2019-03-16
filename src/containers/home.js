import React, { Component } from 'react';
import AddPost from '../components/body/addPost'


class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <AddPost />
    );
  }
}
export default (Home);
