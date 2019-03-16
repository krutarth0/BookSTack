import React from 'react'
import {Route} from 'react-router-dom'
import Profile from './components/body/profile'
import Home from "./containers/home";
import Skeleton from './TEST/skeleton';

const BaseRouter =(props)=>(
  <div>
  <Route exact={true}  path="/" render={() => <Home {...props}/>} />
  <Route exact={true}  path="/profile" render={() => <Profile {...props}/>} />
  </div>
)

export default BaseRouter
