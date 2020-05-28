import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

const MainPage = (props) => {
    return(
        <div className="MainPage">
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <h1>This is MainPage!</h1>
        </div>
    )
}

export default MainPage