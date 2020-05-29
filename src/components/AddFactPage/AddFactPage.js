import React from 'react';

function addFactPage(props) {
    
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <title>{props.fact.name}</title>
                <textarea 
                    placeholder='Enter a Fact...'
                    name='content'
                    onChange={props.handleChange}
                />
                <button type='submit'>POST</button>
            </form>
        </div>
    )
}

export default addFactPage;