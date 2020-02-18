import React,{Component} from 'react';
import './App.css';
import Paragraph from './components/Paragraph'
import ListedInputs from './components/ListedInputs'

export default class App extends Component {
  render(){
    return (
      <div>
        <ListedInputs />
        <Paragraph />
      </div>
    );
  }
}