import React from 'react'
import {Route} from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD

=======
import Profile from './components/body/profile'
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
import Profile from './components/body/profile'
>>>>>>> pr/3
import Home from "./containers/home";
import Skeleton from './TEST/skeleton';
import Login from './auth/login'
import Profile from "./containers/profile";

const BaseRouter =(props)=>(
<<<<<<< HEAD

<<<<<<< HEAD
  <div>

  <Route exact  path="/"  render={()=><Home/>}/>
  <Route exact  path="/skeleton" render={()=><Skeleton {...props}/>}/>
  <Route exact  path="/profile"  render={()=><Profile />}/>
=======
const BaseRouter =(props)=>(
  <div>
  <Route exact={true}  path="/" render={() => <Home {...props}/>} />
  <Route exact={true}  path="/profile" render={() => <Profile {...props}/>} />
>>>>>>> dbfbc34eb35afcc90e0a0eccf102fa9392f2cc06
=======
  <div>
  <Route exact={true}  path="/" render={() => <Home {...props}/>} />
  <Route exact={true}  path="/profile" render={() => <Profile {...props}/>} />
>>>>>>> pr/3
  </div>
)

export default BaseRouter
