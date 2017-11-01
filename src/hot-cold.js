import React from 'react';
import onGuess from './guess-form.js';
import GuessTracker from './guess-tracker.js';
import GuessContainer from './guess-container.js';
import './hot-cold.css';



export default class HotCold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            feedback: 'Guess a number between 1 and 100!',
        };
    }

    newGame() {
        this.setState({
            guesses: [],
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            feedback: 'Guess a number between 1 and 100!',            
        });
    }

    newGuess(guess){
        guess = parseInt(guess, 10);
        
        const diff = Math.abs(guess - this.state.correctAnswer);
        
        let feedback;
        if (diff>=50) {
            feedback = `Freezing`;
        }
        else if (diff>=30) {
            feedback = `Brrrrr`;
        }
        else if (diff>=10) {
            feedback = `Toasty`;
        }
        else if (diff>=1) {
            feedback = `You're Really Hot, Hot, Hot!`;
        }
        else {
            feedback = `You have chosen...Wisely`;
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        })
    }

    render () {
        return (
            <div className="container">
                <h1 className="title">HOT or COLD</h1>
                <GuessContainer feedback={this.state.feedback} 
                    onGuess={(guess) => this.newGuess(guess)}/>
                <GuessTracker guessNumber={this.state.guesses.length}/>
            </div>
        );
        }
}