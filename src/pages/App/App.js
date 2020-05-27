import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  render() {
    return (
      <div className="App">
        <header className='header-footer'>Funny &nbsp;&nbsp;&nbsp;  Historical Facts</header>
        <Switch>
          <Route exact path='/' render={() => {
            <MainPage 
              handleLogout={this.handleLogout}
            />
          }} />
          <Link to="/signup">
            SignUp
          </Link>

          <Link to="/login">
            LogIn
          </Link>
          <Route path="/signup" component={( history ) => 
          <SignupPage 
            history={history} 
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          } />
          <Route path="/login" component={( history ) => 
          <LoginPage 
            history={history} 
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
