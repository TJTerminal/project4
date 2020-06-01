import React from 'react';
import './FactDetailPage.css';
import AddFactForm from '../../components/AddFactForm/AddFactForm';

function FactDetailPage(props) {
    return (
        <>
            <div>
                {props.newFact.map(fact =>
                    <AddFactForm 
                        key={fact._id}
                        fact={newFact}
                    />
                )}
            </div>
        </>
    );
}

export default FactDetailPage;