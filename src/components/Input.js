import React, {Component} from 'react';

export default class Input extends Component {
    constructor(){
        super()
            this.state = {
                input: ""
            }
    }
    handleChange = (event) => {
        // method that takes the value from the input and calls updateName
        this.updateInput(event.target.value)
    }

    updateInput = (value) => {
        this.setState({ input: value })
        console.log(this.state.input);
    }

    render(){
    return (
        <div>
            <label>
                {this.props.type}
            </label>
            <input
                value={ this.props.input }
                onChange={ this.handleChange }
            />
            <button onClick = {this.props.addInput.bind(this,this.state.input)}>Submit Test</button>
        </div>
    );
    }
}
