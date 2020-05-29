import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import AddFact from '../MainPage/MainPage';

class MainPage extends Component {
    render() {
        return(
            <div className="MainPage">
                <NavBar 
                    user={this.props.user} 
                    handleLogout={this.props.handleLogout} 
                />
                <AddFact 
                    handleSubmit={this.props.handleSubmit} 
                />
                <h1>This is MainPage!</h1>
            </div>
        )
    }
}

export default MainPage;