import React, { Component } from 'react';


import BookList from '../components/BookList';
import Navigation from "../layout/Navigation";

class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
      xsearch: "",
      search:"outer space"
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
  }
  render() {
    return (
            <div id="main">
                <Navigation/>
                <h1 className="logo-font">Book STack </h1>
                <div style={{textAlign:"center"}}>
                <input type ="text" onChange={this.handleChange} />
                <input type ="button" value="Search" onClick={this.handleClick} />
                </div>
            <BookList search={this.state.search}/>
            </div>
    );
  }
}
export default Home;
