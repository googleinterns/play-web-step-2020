import React, { Component } from 'react';
import playLogo from './Images/play_logo.png';
import './header.style.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="nav-bar">
                    <li className="nav-element logo">
                        <a href="https://play.google.com/store">
                            <img src={playLogo} alt="Google Play Logo"/>
                        </a>
                    </li>
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/apps/category/GAME">
                            Games
                        </a>
                    </li>
                    <li className="nav-element active">
                        <a href="https://play.google.com/store/apps">
                            Apps
                        </a>
                    </li>
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/movies">
                            Movies & TV
                        </a>
                    </li>
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/books">
                            Books
                        </a>
                    </li>
                    <li className="nav-element link">
                        <a href="https://play.google.com/store/apps/category/FAMILY">
                            Kids
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
