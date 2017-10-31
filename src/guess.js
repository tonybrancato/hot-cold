import React from 'react';

import './guess.css'

export default function Guess() {
    return (
        <div className="guess-container">
            <form>
                <input className="guess-input"></input>
                <br/>
                <button type="submit" className="guess-btn">SUBMIT GUESS</button>
            </form>
        </div>
    )
}