import React, { Component } from 'react';
import playLogo from './Images/play_logo.png';
import './header.style.css';

class Header extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
    render() {
        return (
            <div className="header">
                <ul className="nav-bar">
                    <li className="nav-element logo">
=======
    render(){
        return(
=======
    render() {
        return (
>>>>>>> Fixes comments.
            <div className="header">
                <ul className="nav-bar">
                    <li className="nav-element" id="logo">
>>>>>>> Sets up header
                        <a href="https://play.google.com/store">
                            <img src={playLogo} alt="Google Play Logo"/>
                        </a>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/apps/category/GAME">
                            Games
                        </a>
                    </li>
                    <li className="nav-element active">
=======
                    <li className="nav-element" id="link">
=======
                    <li className="nav-element link">
>>>>>>> Fixes comments.
                        <a href="https://bit.ly/30xkTrQ">
                            Games
                        </a>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    <li className="nav-element" id="active">
>>>>>>> Sets up header
=======
                    <li className="nav-element link" id="active">
>>>>>>> Fixes comments.
=======
                    <li className="nav-element" id="active">
>>>>>>> Fixes comments.
                        <a href="https://play.google.com/store/apps">
                            Apps
                        </a>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    <li className="nav-element link">
=======
                    <li className="nav-element" id="link">
>>>>>>> Sets up header
=======
                    <li className="nav-element link">
>>>>>>> Fixes comments.
                        <a href="https://play.google.com/store/movies">
                            Movies & TV
                        </a>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    <li className="nav-element link">
=======
                    <li className="nav-element" id="link">
>>>>>>> Sets up header
=======
                    <li className="nav-element link">
>>>>>>> Fixes comments.
                        <a href="https://play.google.com/store/books">
                            Books
                        </a>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/apps/category/FAMILY">
=======
                    <li className="nav-element" id="link">
=======
                    <li className="nav-element link">
>>>>>>> Fixes comments.
                        <a href="https://play.google.com/store/search?q=kids">
>>>>>>> Sets up header
                            Kids
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
