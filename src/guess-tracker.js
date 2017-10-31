import React from 'react';
import './guess-tracker.css';

export default function GuessTracker() {
    const guessNumber = 0;
    return (
        <div className="guess-number">Guess #<span className="number">{guessNumber}</span></div>
    )
}

