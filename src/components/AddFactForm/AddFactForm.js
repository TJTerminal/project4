import React from 'react';
import { Link } from 'react-router-dom';
import factService from '../../utils/factService';

function addFactForm(props) {
    return(
        <div clasName='panel panel-default'>
            <form onSubmit={props.handleSubmit}>
                <title>{fact.title}</title>
                <textarea 
                    placeholder='Enter a Fact...'
                    name='newFact'
                    onChange={props.handleChange}
                />
                <button type='submit'>POST</button>
            </form>
        </div>
    )
}

export default addFactForm;