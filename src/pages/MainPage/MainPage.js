import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import NavBar from '../../components/NavBar/NavBar';
// import AddFactPage from '../AddFactPage/AddFactPage';
// import userService from '../../utils/userService';
// import factService from '../../utils/factService';

import addFactForm from '../../components/AddFactForm/AddFactForm';

function MainPage(props) {
    return (
        <div className='MainPage'>
            {props.newFact.map(fact => 
                fact.owner===props.user._id ?
                <addFactForm 
                    key={fact._id}
                    fact={fact}
                    handleDeleteFact={props.handleDeleteFact}
                />
                :
                <> </>
                )}
        </div>
    )
}


// class MainPage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             user: userService.getUser(),
//             newFact: '',
//         }
//     }

//     async componentDidMount() {
//         const newFact = await factService.index();
//         this.setState({ newFact: newFact })
//     }
    
//     render() {
//         return(
//             <div className="MainPage">
//                {this.state.newFact.map((fact, idx) => (
                   
//                    <AddFactPage 
//                     handleSubmit={this.props.handleSubmit} 
//                     handleChange={this.props.handleChange}
//                     key={idx}
//                     fact={fact}
//                     />
//                ) )}
                
//                 <h1>This is MainPage!</h1>
//             </div>
//         )
//     }
// }

export default MainPage;