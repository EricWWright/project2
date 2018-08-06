import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const navHamburger = document.querySelector('#navHamburger');
        navHamburger.addEventListener('click', (e) => {
            navHamburger.parentElement.classList.toggle('active');
        })
        return (
            <div className="navbar">
                <a href="#" className="toggle" id="navHamburger">
                    <i className="fas fa-bars"></i>
                </a>
                <a href="#" className="brand">MyName</a>
                <div className="left">
                    <a href="#" className="link">Link 1</a>
                    <a href="#" className="link">Link 2</a>
                </div>
                <div className="right">
                    <a href="#" className="link">Link 3</a>
                </div>
            </div>
        );
    }
}
