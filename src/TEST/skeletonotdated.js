import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { graphql, compose } from 'react-apollo';
import { } from '../queries/queries';



import Navigation from "../layout/Navigation";

class Skeleton extends Component {

  constructor(props){
      super(props);
      this.state = {
          recent:false,
          value:"",
          user_name: "",
          books:[],
          recent_book:""
      }
  }

  addItem = ()=>{
    this.setState(state=>{
      const books = state.books.concat (state.value);
      return{
        books
      }
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
        <div>
        <Navigation/>

        <div style={{position:"relative",marginTop:"20px",marginLeft:"20px"}}>
        <input type="text"  onChange={(e)=>this.setState({user_name:e.target.value})}/> Enter your name <br/>
        <input type="text"  style={{marginTop:"20px"}} onChange={(e)=>this.setState({value:e.target.value})}/> enter the name of the book/books that've infuenced you
        <Button primary style={{marginLeft:"5px"}} onClick={this.addItem} >Add Book</Button>
      </div>

        <div id="book-details" style={{top:"56px"}}>
          <h1>Name:{this.state.user_name}
          {this.state.recent?
           <p style={{fontSize:"18px"}}>(recent book
            : {this.state.recent_book}
          )</p>:
         null}</h1>

          <h2>Books:
            <ul>
            {this.state.books.map(item=>
              <div>
              <li>{item}<p style={{fontSize:"18px"}}>(i'll find this book on google and  goodread to make it accurate)</p>
              <p style={{fontSize:"18px"}}>(and will ask user if this is the book he/she talking about then we'll follow further)</p>
              <p style={{fontSize:"18px"}}>(or if we didn't able to fetch the currect book we ask user to add title, author name ,genre and stuff)</p><br/>
              </li>
               <h4>Author </h4> <p  style={{fontSize:"18px"}}>(then i'll fetch the details about the author of the book, from goodread)</p>
               <h4>grenre:</h4> <p style={{fontSize:"18px"}}>(then i'll add all the genre about the books that a user added to a list and save it to the user databse to display the taste of the user)</p>
              </div>)}
            </ul>
           </h2>
        </div>

          <h2 style={{marginLeft:"18px",marginTop:"30px"}}>this is it for the first time when a user joins! </h2>
          <p style={{marginLeft:"18px"}}>Now we'll work on the current activity of the user</p>

          <div style={{position:"relative",marginTop:"20px",marginLeft:"20px"}} >
          <input type="text"  onChange={(e)=>this.setState({recent_book:e.target.value})}/> post the recent book that you've been reading or read <br/>
            <Button primary  style={{marginTop:"5px"}} onClick={()=>this.setState({recent:true})}>Post</Button>
          </div>

              <div style={{marginLeft:"18px",marginTop:"30px"}}>
              <h2 >and more !! like what made him read that book? </h2>
              <h2>or 5 senctance about that book or rate that book </h2>
              <p>add the ideas you got </p>
              <h5>and make a beautiful front end, i feel exhausted on that </h5>
              </div>
        </div>

    );
  }
}
export default Skeleton;
