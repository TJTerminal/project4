import React, { Component } from 'react';

class AddFactPage extends Component {
    constructor() {
        super();
        this.state = {
            factData: {
                title: '',
                content: '',
            },
            invalidForm: true,
        }
    }

    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = this.state.factData;
        console.log('user: ', this.props.user._id);
        formData.user = this.props.user._id;
        await this.setState({factData: formData});
        console.log('sending the following fact to handleAddFact from AddFactPage inside handleSubmit');
        console.log(formData);
        this.props.handleAddFact(formData);
      }
    
    handleChange = e => {
        const factData = {...this.state.factData, [e.target.name]: e.target.value};
        this.setState( {
            factData,
            invalidForm: !this.formRef.current.checkValidity()
        } )
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    ref={this.formRef}
                >
                
                <textarea 
                    placeholder='Enter a title...'
                    name='title'
                    onChange={this.handleChange}
                />

                <textarea 
                    placeholder='Enter a Fact...'
                    name='content'
                    onChange={this.handleChange}
                />
                <button 
                    type='submit'
                    disabled={this.state.invalidForm}
                >POST</button>
                </form>
            </div>
        )
    }
}

export default AddFactPage;