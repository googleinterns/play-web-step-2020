import React, { Component } from 'react';
import PropTypes from "prop-types";
import SingleCardContainer from './SingleCardContainer.js';
import '../styles.css';
import './StandardClusterStyle.css';

class StandardCluster extends Component {
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

        const { data } = this.props;

        return (
            <div className="section">
                <div className="section-header">
                    <h2>{data.title}</h2>
                </div>
                <div className="col">
                    {data.cards.map(makeRow)}
                </div>                
            </div>
        );
    }
}

export default StandardCluster;

StandardCluster.propTypes = {
    data: PropTypes.object.isRequired
};
