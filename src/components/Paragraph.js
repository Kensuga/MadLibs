import React,{Component} from 'react';

export default class Paragraph extends Component {
    constructor(props){
        super(props)
    }

  render(){  
    return (
        <p>Last month, I went to Disney World with {}. We
        traveled for {} by {}. Finally, we
        arrived and it was very {}. There were
        {} people {} everywhere. There
        were also people dressed up in {} costumes.
        
        I wish it had been more {}, but we {}
        anyway. We also went on a(n) {} ride
        called Magic . {} nearly fell off a ride and had to be
        {}. Later, we went to the hotel and
        {}. Next year, I want to go to {},
        where we can {}. 
        </p>
    );
  }
}
