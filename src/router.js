import React from 'react'
import {Route} from 'react-router-dom'

import Login from './auth/login';
import Home from "./containers/home";
import Skeleton from './TEST/skeleton';

const BaseRouter =()=>(
  <div>
  <Route exact={true} path="/login" component={Login}/>
  <Route exact={true}  path="/" component={Home}/>
  <Route exact={true}  path="/skeleton" component={Skeleton}/>
  </div>
)

export default BaseRouter
