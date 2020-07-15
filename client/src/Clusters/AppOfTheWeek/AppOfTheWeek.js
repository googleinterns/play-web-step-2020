import React, { Component } from 'react';
import '../styles.css';
import './AOTWStyle.css'
import {aotw} from './mockData.js';

class AppOfTheWeek extends Component {
    render(){
        return(
            <div className="aotw">
                <div className="text">
                    <h1 className="aotw-header">{aotw.title}</h1>
                    <p className="aotw-description">{aotw.description}</p>
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
