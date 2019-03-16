import React, {Fragment} from 'react'
import BookList from '../BookList';
class Search extends React.Component{
constructor(){
  super()
  this.state={
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
  render(){
    return(
      <Fragment>
        <div id="main">
            <h1 className="logo-font">Book STack </h1>
            <div style={{textAlign:"center"}}>
            <input type ="text" onChange={this.handleChange} />
            <input type ="button" value="Search" onClick={this.handleClick} />

            </div>
            {console.log(this.state.search)}
            <BookList search={this.state.search}/>
        </div>
      </Fragment>
    )
  }
}

export default Search
