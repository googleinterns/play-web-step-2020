import React, { Component } from 'react';
import PropTypes from "prop-types";
import CardContainer from './card_container.js';
import '../styles.css';

class RecommendedCategories extends Component {
    render() {
        const makeCard = item => (
            <CardContainer
                key={item.id}
                category={item.category}
                url={item.url}
            />
        );

        const { data } = this.props;

        return (
            <div className="category-section">
                <div className="category-section-header">
                    <h6>{data.subtitle}</h6>
                    <h2>{data.title}</h2>
                </div>
                <div className="card-container">
                    {data.card.map(makeCard)}
                </div>
                <a href={data.url}>{data.text}</a>
            </div>
        );
    }
}

export default RecommendedCategories;

RecommendedCategories.propTypes = {
    data: PropTypes.object.isRequired
};