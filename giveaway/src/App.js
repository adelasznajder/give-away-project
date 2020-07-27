import React, {Component} from 'react';
import {NaviMenu} from "./components/NaviMenu";
import logo from './logo.svg';
import './scss/main.scss';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import {Home} from "./components/Main";
import {Contact} from "./components/Contact";
import {LoginBar} from "./components/LoginBar";
import {HomeHeader} from "./components/HomeHeader";
import {SignUp} from "./components/Signup";
import {Login} from "./components/Login";

export class App extends Component {
  render() {
    return <HashRouter>
      <LoginBar/>
      <NaviMenu/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </HashRouter>;

  }
}