import React from 'react';
import { Link } from 'react-router-dom';
// import factService from '../../utils/factService';
// import userService from '../../utils/userService';

function AddFactForm({fact, handleDeleteFact, user, idx}) {
    return (
        <div clasName='panel panel-default'>
            <h1>Add Fact Form</h1>
            {/* <div className='panel-heading'>
                <h3>{fact.title}</h3>
            </div> */}
            <div className='panel-body'>
                <dl>
                    <dt>Title:</dt>
                    <dd>{fact.title}</dd>
                    <dt>Content:</dt>
                    <dd>{fact.content}</dd>
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
                        state: {fact},
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
                    onClick={() => handleDeleteFact(fact._id, idx)}
                >DELETE</button>
                {/* :
                <></>
            } */}
            </div>
        </div>
    )
}

export default AddFactForm;