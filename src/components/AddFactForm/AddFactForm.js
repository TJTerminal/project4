import React from 'react';
import { Link } from 'react-router-dom';
// import factService from '../../utils/factService';
// import userService from '../../utils/userService';

function AddFactForm({props, fact, handleDeleteFact, user}) {
    return (
        <div clasName='panel panel-default'>
            <h1>Add Fact Form</h1>
            <div className='panel-body'>
                <form onSubmit={props.handleSubmit}>
                    
                    <textarea 
                        placeholder='Enter a title...'
                        name='title'
                        onChange={props.handleChange}
                    />

                    <textarea 
                        placeholder='Enter a Fact...'
                        name='content'
                        onChange={props.handleChange}
                    />
                    <button type='submit'>POST</button>
                </form>
            </div>
            <div className='panel-footer'>
            {fact.owner===user._id ?
                <Link 
                    to={{
                        pathname: '/edit',
                        state: {fact}
                    }}
                >
                EDIT
                </Link>
                :
                <></>
            }
            {fact.owner===user._id ?
                <button
                    className='btn-delete'
                    onClick={() => handleDeleteFact(fact._id)}
                >DELETE</button>
                :
                <></>
            }
            </div>
        </div>
    )
}

export default AddFactForm;