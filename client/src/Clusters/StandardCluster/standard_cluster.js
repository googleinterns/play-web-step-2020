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
                bigImageUrl={item.bigImageUrl}
                title={item.app.title}
                url={item.app.url}
                rating={item.app.rating}
                rated={item.app.rated}
                price={item.app.price}
                appDescription={item.app.appDescription}
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
