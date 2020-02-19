import React, { Component } from 'react';
import Paragraph from './Paragraph';

class ListedInputs extends Component {
    constructor(props){
        super(props)
        this.state = {
            frName: "",
            numHr: "",
            vehicle: "",
            adjective1: "",
            adjective2: "",
            ingVerb: "",
            animal: "",
            adjective3:"",
            ptVerb: "",
            adjective4: "",
            noun: "",
            ptVerb2:"",
            ptVerb3:"",
            place:"",
            verb:"",
            isTrue: false,
            diabled: false
        } 
    }

    updateName = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        this.setState({ disabled: true });
        this.setState({ isTrue: true });
    }


    clearParagraph = () => {
        this.setState({ disabled: false });
        this.setState({ isTrue: false });
        window.location.reload();
    }

    render(){
        return (
            <div>
                <form>
                    <input
                        onChange= { this.updateName }
                        name = "frName"
                        placeholder = "Friend's Name"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        onChange= { this.updateName }
                        name = "numHr"
                        placeholder= "Number of Hours"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="vehicle"
                        onChange= { this.updateName }
                        placeholder= "Vehicle"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        onChange= { this.updateName }
                        name = "adjective1"
                        placeholder= "Adjective"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="adjective2"
                        onChange= { this.updateName }
                        placeholder= "Adjective"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="ingVerb"
                        onChange= { this.updateName }
                        placeholder= "-ing Verb"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="animal"
                        onChange= { this.updateName }
                        placeholder= "Animal"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="adjective3"
                        onChange= { this.updateName }
                        placeholder= "Adjective"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="ptVerb"
                        onChange= { this.updateName }
                        placeholder= "Past Tense Verb"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="adjective4"
                        onChange= { this.updateName }
                        placeholder= "Adjective"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="noun"
                        onChange= { this.updateName }
                        placeholder= "Noun"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="ptVerb2"
                        onChange= { this.updateName }
                        placeholder= "Past Tense Verb"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="ptVerb3"
                        onChange= { this.updateName }
                        placeholder= "Past Tense Verb"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="place"
                        onChange= { this.updateName }
                        placeholder= "Place"
                        disabled = {this.state.disabled}
                    ></input>
                    <input
                        name="verb"
                        onChange= { this.updateName }
                        placeholder= "Verb"
                        disabled = {this.state.disabled}
                    ></input>
                </form>

                <button onClick={ this.handleSubmit }>Submit</button>
                <button onClick={ this.clearParagraph }>Clear</button>

                { this.state.isTrue === true && <Paragraph words={this.state} /> }
            </div>
        );
    }
}

export default ListedInputs;