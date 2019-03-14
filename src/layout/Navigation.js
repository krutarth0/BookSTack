import React from 'react';
import Logo from '../components/logo/logo.js'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Login from '../auth/login'
import firebase from "firebase"

class Navigation extends React.Component {

state={
  logout:true,
  
}


  render() {

    const Button = styled.button `
        display: inline-block;
        border-radius: 3px;
        width: 5rem;
        margin:2px;
        background: transparent;
        color: tomato;
        border: 2px solid tomato;
        ${props=>props.primary && css`
              background:tomato;
              color:white;`}
        &:hover{
          background:tomato;
          color:white;
        }
    `;

    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <div className="container">
          <Logo/>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to='/'><Button>Home</Button></Link>
                </li>
                {this.props.isSignedIn ?
                  <React.Fragment>
                  <li className="nav-item">
                      <Link to='/'><Button onClick={()=>{
                        firebase.auth().signOut()
                        this.props.logout()
                      }}>Logout</Button></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/profile'><Button>Profile</Button></Link>
                  </li>
                  </React.Fragment>:
                  <li className="nav-item">
                      <Button  data-toggle="modal" data-target="#login" >Login</Button>
                  </li>

                }
              <li className="nav-item">
                <Link exact to='/skeleton'><Button>skeleton</Button></Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <Login setStates={this.props.setStates} logout={this.state.logout} />
          </div>
        </div>
      </div>

      </React.Fragment>

    );
  }
}

export default Navigation
