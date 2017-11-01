import React from 'react';

import './guess-form.css'

export default class GuessForm extends React.Component {
    onGuess(e) {
        e.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }
    render () {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <input type="text" className="guess-input"  
                    maxLength="3" ref={input => this.input = input} />
                <br/>
                <input type="submit" className="guess-btn" value="SUBMIT GUESS" />
            </form>
        )
    }
}