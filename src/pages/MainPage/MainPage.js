import React from 'react';
import './MainPage.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import NavBar from '../../components/NavBar/NavBar';
// import AddFactPage from '../AddFactPage/AddFactPage';
// import userService from '../../utils/userService';
// import factService from '../../utils/factService';

import AddFactForm from '../../components/AddFactForm/AddFactForm';
import AddFactPage from '../AddFactPage/AddFactPage';

function MainPage(props) {
    return (
        <div className='MainPage'>
            {props.fact.map(newFact => 
                // newFact.createdBy._id===props.user._id ?
                // <AddFactPage 
                //     user={props.user}
                //     key={newFact._id}
                //     newFact={newFact}
                //     handleDeleteFact={props.handleDeleteFact}
                // />
                newFact.title + 
                newFact.content
                // :
                // null
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