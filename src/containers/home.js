import React, { Component } from 'react';
import AddPost from '../components/body/addPost'
<<<<<<< HEAD

<<<<<<< HEAD
import BookList from '../components/BookList';

=======
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06

class Home extends Component {
  constructor(props){
    super(props)
<<<<<<< HEAD
    this.state ={
      xsearch: "",
      search:"outer space",

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
=======
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======


class Home extends Component {
  constructor(props){
    super(props)
>>>>>>> pr/3
  }

  render() {

    return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div id="main">
                <h1 className="logo-font">Book STack </h1>
                <div style={{textAlign:"center"}}>
                <input type ="text" onChange={this.handleChange} />
                <Button primary  style={{marginLeft:"10px",width:"80px"}}onClick={this.handleClick} >Search</Button>
                </div>
            <BookList search={this.state.search}/>
            </div>
=======
      <AddPost />
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
      <AddPost />
>>>>>>> pr/3
    );
  }
}
export default (Home);
