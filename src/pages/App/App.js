import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

import AddFactPage from '../AddFactPage/AddFactPage';
import UpdateFactPage from '../UpdateFactPage/UpdateFactPage';

import userService from '../../utils/userService';
import factService from '../../utils/factService';
import AddFactPage from '../AddFactPage/AddFactPage';


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

  async handleAddFact(fact) {
    const newFact = await factService.create(fact);
    this.setState(state => ({
      newFact: newFact
    }),
    () => this.props.history.push('/')
    )
  }

  async handleDeleteFact(id) {
    await factService.deleteOne(id);
    this.setState(state => ({
      newFact: state.newFact.filter()
    }))
  }

  async handleUpdateFact(updatedFact) {
    const updatedFact = await factService.update(updatedFact);
    const newUpdatedFact = this.state.newFact.map(fact =>
      fact._id === updatedFact._id ? updatedFact : fact
    );
    this.setState(
      {newFact: newUpdatedFact},
      () => this.props.history.push('/')
    );
  }

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
            <MainPage 
              user={this.state.user}
              handleDeleteFact={this.handleDeleteFact}
              newFact={this.state.newFact}
              // handleLogout={this.handleLogout}
              // handleSubmit={this.handleSubmit}
              // handleChange={this.handleChange}
            />
          } />

          <Route exact path="/add" render={() => 
            <AddFactPage 
              handleAddFact={this.handleAddFact}
            />
          } />

          <Route exact path="/edit" render={() => 
            <UpdateFactPage 
              handleUpdateFact={this.handleUpdateFact}
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
