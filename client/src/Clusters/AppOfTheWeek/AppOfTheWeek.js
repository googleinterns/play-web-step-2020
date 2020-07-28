import React, { Component } from 'react';
import '../styles.css';
import './AppOfTheWeek.style.css'
import {aotw} from './mockData.js';

class AppOfTheWeek extends Component {
    render() {
        return (
            <div className="app-of-the-week">
                <div className="text">
                    <h2 className="header">{aotw.title}</h2>
                    <p className="description">{aotw.description}</p>
                    <img className="icon-img" alt="Strata Icon" src={aotw.icon} />
                    <h3 className="app-name">{aotw.app_name}</h3>
                    <p className="developer">{aotw.developer}</p>
                    <p className="rating">{aotw.rating}</p>
                    <p className="reviews">{aotw.reviews}</p>
                    <p className="rated">{aotw.rated}</p>
                </div>
            </div>
        );
    }
}

export default AppOfTheWeek;
