import React from 'react';

function addFactPage(props) {
    
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <title>addFactPage</title>
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

export default addFactPage;