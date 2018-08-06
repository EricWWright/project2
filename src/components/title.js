import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        return (
            <div>
                <div className="page_title">
                    <h1>Hi there!</h1>
                </div>
                <div className="intro_text">
                    <p>Welcome to my website!</p>
                    <p>I'm so glad that your are here!</p>
                    <p>Click an image below and see where it takes you!</p>
                </div>
            </div>
        );
    }
}