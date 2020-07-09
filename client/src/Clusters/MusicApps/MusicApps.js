import React, { Component } from 'react';
import '../styles.css';
import './MusicAppsStyle.css';
import SingleCardContainer from './SingleCardContainer.js';
import {musicApps} from './MockData.js';

class MusicApps extends Component {
    render() {
        const makeRow = item => (
            <div key={item.id}>
                <SingleCardContainer
                bigImage={item.wearOsImage}
                title={item.title}
                iconUrl={item.iconUrl}
                rating={item.rating}
                rated={item.rated}
                appDescription={item.appDescription}
                />
            </div>
        );

        return (
            <div className="section">
                <div className="section-header">
                    <h2>{musicApps.title}</h2>
                </div>
                <div className="col">
                    {musicApps.cards.map(makeRow)}
                </div>                
            </div>
        );
    }
}

export default MusicApps;
