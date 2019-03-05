import React from 'react';

class Navigation extends React.Component {
  render() {
    return (

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
          <a href="index.html" class="navbar-brand">BookStack</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="index.html" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">About Us</a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="blog.html" class="nav-link">Blog</a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}

export default Navigation;