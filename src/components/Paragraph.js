import React, { Component } from 'react';

class Paragraph extends Component {
    render() {  
        let { frName, numHr, vehicle, adjective1, ingVerb, adjective2, animal, adjective3, ptVerb, adjective4, noun, ptVerb2, ptVerb3, place, verb } = this.props.words;

        return (
            <p>Last month, I went to Disney World with {frName}. We
            traveled for {numHr} by {vehicle}. Finally, we
            arrived and it was very {adjective1}. There were
            {ingVerb} people {adjective2} everywhere. There
            were also people dressed up in {animal} costumes.
            
            I wish it had been more {adjective3}, but we {ptVerb}
            anyway. We also went on a(n) {adjective4} ride
            called Magic . {noun} nearly fell off a ride and had to be
            {ptVerb2}. Later, we went to the hotel and
            {ptVerb3}. Next year, I want to go to {place},
            where we can {verb}. 
            </p>
        );
    }
}

export default Paragraph;