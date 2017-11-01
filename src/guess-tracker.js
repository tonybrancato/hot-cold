import React from 'react';
import './guess-tracker.css';

export default function GuessTracker(props) {
    const guessNumber = 0;
    return (
        <div className="guess-number">Guess #<span id="guessNumber" 
        className="number">{props.guessNumber}</span></div>
    )
}

