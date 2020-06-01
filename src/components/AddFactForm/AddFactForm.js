import React from 'react';
import { Link } from 'react-router-dom';
import factService from '../../utils/factService';
import userService from '../../utils/userService';

function addFactForm({fact, handleDeleteFact}) {
    return(
        <div clasName='panel panel-default'>
            <div className='panel-body'>
                <form onSubmit={props.handleSubmit}>
                    <title>title</title>
                    <textarea 
                        placeholder='Enter a Fact...'
                        name='newFact'
                        onChange={props.handleChange}
                    />
                    <button type='submit'>POST</button>
                </form>
            </div>
            <div className='panel-footer'>
            {newFact.owner===user._id ?
                <Link 
                    to={{
                        pathname: '/edit',
                        state: {newFact}
                    }}
                >
                EDIT
                </Link>
                :
                <></>
            }
            {newFact.owner===user._id ?
                <button
                    className='btn-delete'
                    onClick={() => handleDeleteFact(newFact._id)}
                >DELETE</button>
                :
                <></>
            }
            </div>
        </div>
    )
}

export default addFactForm;