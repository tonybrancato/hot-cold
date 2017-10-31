import React from 'react';
import Guess from './guess.js';
import GuessTracker from './guess-tracker.js';
import './hot-cold.css';



export default class HotCold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render () {
    return (
        <div className="container">
            <h1 className="title">HOT or COLD</h1>
            <h2>Enter Your Guess Below!</h2>
            <Guess />
            <GuessTracker />
        </div>
    );
}
}