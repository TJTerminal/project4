import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import AddFactPage from '../../components/AddFactPage/AddFactPage';

class MainPage extends Component {
    render() {
        return(
            <div className="MainPage">
               
                <AddFactPage 
                    handleSubmit={this.props.handleSubmit} 
                    handleChange={this.props.handleChange}
                />
                <h1>This is MainPage!</h1>
            </div>
        )
    }
}

export default MainPage;