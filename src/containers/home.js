import React, { Component } from 'react';
import styled, { css } from 'styled-components'


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
    const Button = styled.button `
        display: inline-block;
        border-radius: 3px;
        width: 11rem;
        background: transparent;
        color: tomato;
        border: 2px solid tomato;
        ${props=>props.primary && css`
              background:tomato;
              color:white;`}
    `;
    return (
            <div id="main">
                <Navigation/>
                <h1 className="logo-font">Book STack </h1>
                <div style={{textAlign:"center"}}>
                <input type ="text" onChange={this.handleChange} />
                <Button primary  style={{marginLeft:"10px",width:"80px"}}onClick={this.handleClick} >Search</Button>
                </div>
            <BookList search={this.state.search}/>
            </div>
    );
  }
}
export default Home;
