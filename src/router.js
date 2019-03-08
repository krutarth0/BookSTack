import React from 'react'
import {Route} from 'react-router-dom'

import Login from './auth/login';
import Home from "./containers/home";

const BaseRouter =()=>(
  <div>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/" component={Home}/>
  </div>
)

export default BaseRouter
