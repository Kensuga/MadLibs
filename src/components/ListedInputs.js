import React, { Component } from 'react';
import Input from './Input'

export default class ListedInputs extends Component {
    constructor(){
        super()
        this.state = {
            inputArray: []
            }
        }

    addInput = (input) =>{
        let tempArray = [] 
        tempArray.push(this.props.input)
        this.setState({ inputArray: tempArray })
        console.log(this.state.inputArray);
    }

    render(){
        return (
            <div>
                <Input 
                    type={ "Friend's Name " }
                    updateArray= { this.updateArray }
                    addInput = { this.addInput }
                />
                <Input
                    type ={ "Hours # " }
                    updateArray = {this.updateArray }
                    addInput = { this.addInput }
                />
                <button>Submit</button>
            </div>
        );
    }
}