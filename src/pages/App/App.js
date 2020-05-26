import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }
  
  render() {
    return (
      <div className="App">
        Hello this is App.js!
        <Link to="/signup">
          SignUp
        </Link>

        <Link to="/login">
          LogIn
        </Link>

        <Switch>
          <Route path="/signup" component={() => 
          <SignupPage />
          } />
          <Route path="/login" component={() => 
          <LoginPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
