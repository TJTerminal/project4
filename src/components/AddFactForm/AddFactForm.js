import React from 'react';
import { Link } from 'react-router-dom';
// import factService from '../../utils/factService';
// import userService from '../../utils/userService';

function AddFactForm({newFact, handleDeleteFact, user, idx}) {
    return (
        <div clasName='panel panel-default'>
            <div className='panel-body'>
                <dl>
                    <dt>Title:</dt>
                    <dd>{newFact.title}</dd>
                    <dt>Content:</dt>
                    <dd>{newFact.content}</dd>
                </dl>
                {/* <form onSubmit={props.handleSubmit}>
                    
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
                </form> */}
            </div>
            <div className='panel-footer'>
            {/* {fact.owner===user._id ? */}
                <Link 
                    className='btn'
                    to={{
                        pathname: '/edit',
                        state: {newFact},
                        idx: idx
                    }}
                >
                EDIT
                </Link>
                {/* :
                <></>
            } */}
            {/* {fact.owner===user._id ? */}
                <button
                    className='btn-delete'
                    onClick={() => handleDeleteFact(newFact._id)}
                >DELETE</button>
                {/* :
                <></>
            } */}
            </div>
        </div>
    )
}

export default AddFactForm;