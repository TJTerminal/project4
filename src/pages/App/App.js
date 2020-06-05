import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

import MainPage from '../MainPage/MainPage';
import AddFactPage from '../AddFactPage/AddFactPage';
import EditFactPage from '../EditFactPage/EditFactPage';

import userService from '../../utils/userService';
import factService from '../../utils/factService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      fact: []
    };
  }

  /*-------------- Callback Methods --------------*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddFact = async newFactData => {
    newFactData.user = this.state.user.id
    const newFact = await factService.addFact(newFactData);
    const oldFact = this.state.fact;
    oldFact.push(newFact)
    this.setState({ newFact: oldFact })
    // this.setState({ fact: [...this.state.fact, newFact] })
    // this.setState( state => ({
    //   fact: [...state.fact, newFact]
    // }), () => this.props.history.push('/') );
  }

  handleDeleteFact = async id => {
    await factService.deleteOne(id);
    this.setState(state => ({
      fact: state.fact.filter(p => p.id !== id)
    }), () => this.props.history.push('/')
    )
  }

  handleUpdateFact = async (updatedFactData) => {
    const updatedFact = await factService.update(updatedFactData);
    const newUpdatedFact = this.state.fact.map(newFact =>
      newFact._id === updatedFact._id ? updatedFact : newFact
    );
    this.setState(
      {fact: newUpdatedFact},
      () => this.props.history.push('/')
    );
  }

  /*-------------- Lifecycle Methods --------------*/
  async componentDidMount() {
    console.log(this.state);
    console.log(this.state.user);
    const newFact = await factService.index();
    this.setState({ fact: newFact })
  }

  /*-------------- Render --------------*/
  
  render() {
    return (
      <div className="App">
        <header className='header-footer'>Funny &nbsp;&nbsp;&nbsp;  Historical Facts</header>

        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route exact path='/' render={({history, location}) => 
            userService.getUser() ?
            <MainPage 
              user={this.state.user}
              // handleDeleteFact={this.handleDeleteFact}
              fact={this.state.fact}
              history={history}
              location={location}
            />
            :
            <Redirect to='/login' />
          } />

          <Route exact path="/add" render={() => 
            <AddFactPage 
              handleAddFact={this.handleAddFact}
              // user={this.state.user}
            />
          } />

          <Route exact path="/edit" render={({history, location}) => 
            <EditFactPage 
              handleUpdateFact={this.handleUpdateFact}
              history={history}
              location={location}
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
