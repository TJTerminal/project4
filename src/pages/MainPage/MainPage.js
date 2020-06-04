import React, { Component } from 'react';
import './MainPage.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import NavBar from '../../components/NavBar/NavBar';
// import AddFactPage from '../AddFactPage/AddFactPage';
// import userService from '../../utils/userService';
import factService from '../../utils/factService';

import AddFactForm from '../../components/AddFactForm/AddFactForm';

// const MainPage = props => {
//     return (
//         <div className='MainPage'>
//             <h1>ALL FACTS LIST</h1>
//             <div className='MainPage-grid'>
//                 {props.newFact.map(newFact => 
//                 // newFact.createdBy._id===props.user._id ?
//                 // <AddFactPage 
//                 //     user={props.user}
//                 //     key={newFact._id}
//                 //     newFact={newFact}
//                 //     handleDeleteFact={props.handleDeleteFact}
//                 // />
               
//                 newFact.title + 
//                 newFact.content
//                 // :
//                 // null
//                 )}
//             </div>
            
//         </div>
//     )
// }


class MainPage extends Component {
    state = {
        fact: []
    }

    async componentDidMount() {
        console.log(this.state);
        console.log(this.state.user);
        const newFact = await factService.index();
        this.setState({ fact: newFact })
    }
    
    handleDeleteFact = async (id, idx) => {
        await factService.deleteOne(idx);
        this.setState(state => ({
            fact: state.fact.filter(p => p.id !== id)
        }), () => this.props.history.push('/')
        )
    }

    render() {
        return (
            <div className="MainPage">
                <h1>ALL FACTS LIST</h1>
                <div className='MainPage-grid'>
                    {this.state.fact.map((newFact, idx) =>
                        <AddFactForm 
                            newFact={newFact}
                            idx={idx}
                            user={this.props.user}
                            handleDeleteFact={this.handleDeleteFact}
                            key={newFact._id}
                        />
                    )}
                </div>
                
               {/* {this.state.newFact.map((fact, idx) => (
                   
                   <AddFactPage 
                    handleSubmit={this.props.handleSubmit} 
                    handleChange={this.props.handleChange}
                    key={idx}
                    fact={fact}
                    />
               ) )}
                
                <h1>This is MainPage!</h1> */}
            </div>
        )
    }
}

export default MainPage;