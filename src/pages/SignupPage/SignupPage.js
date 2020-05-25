import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import './SignupPage.css';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm updateMessage={this.updateMessage} />
        <p>Hello this is signup!</p>
      </div>
    );
  }
}

export default SignupPage;