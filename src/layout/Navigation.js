import React from 'react';
import Logo from '../components/logo/logo.js'
import { Link } from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Logo/>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to='/'><a href="index.html" className="nav-link">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link to='/login'><a href="about.html" className="nav-link" style={{textDecorations:"none"}}>Login</a></Link>
              </li>
              <li className="nav-item">
                <Link exact to='/skeleton'><a href="services.html" className="nav-link">skeleton</a></Link>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navigation;
