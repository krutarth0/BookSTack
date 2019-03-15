import React from 'react'
import {Route} from 'react-router-dom'

import Home from "./containers/home";
import Skeleton from './TEST/skeleton';
import Login from './auth/login'
import Profile from "./containers/profile";

const BaseRouter =(props)=>(

  <div>

  <Route exact  path="/"  render={()=><Home/>}/>
  <Route exact  path="/skeleton" render={()=><Skeleton {...props}/>}/>
  <Route exact  path="/profile"  render={()=><Profile />}/>
  </div>
)

export default BaseRouter
