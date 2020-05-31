import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

import AddFact from '../AddFactPage/AddFactPage';

import userService from '../../utils/userService';
import factService from '../../utils/factService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      newFact: '',
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
    const newFact = await factService.index();
    this.setState({ newFact: newFact })
  }

  // handleAddFact = (facts) => {
  //   this.setState()
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   factService.addFact(this.state.newFact);
  // }

  // handleChange = e => {
  //     this.setState( {
  //         [e.target.name]: e.target.value
  //     } )
  // }
  
  render() {
    return (
      <div className="App">
        <header className='header-footer'>Funny &nbsp;&nbsp;&nbsp;  Historical Facts</header>

        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route exact path='/' render={() => 
            userService.getUser() ?
            <MainPage 
              user={this.state.user}
              handleLogout={this.handleLogout}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          } />

          <Route exact path="/signup" component={( history ) => 
          <SignupPage 
            history={history} 
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          } />

          <Route exact path="/login" component={( history ) => 
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
