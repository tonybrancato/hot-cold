import React from 'react';

import GuessForm from './guess-form';

import './guess-container.css';

export default function GuessContainer(props) {
    return (
        <div>
            <h2 id="feedback">{props.feedback}</h2>  
            <GuessForm onGuess={props.onGuess} />
        </div>
    )
}