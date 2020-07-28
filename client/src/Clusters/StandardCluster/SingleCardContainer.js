import React, { Component } from "react";
import PropTypes from 'prop-types';
import starIcon from '../TopCharts/Images/starIcon.svg';

class SingleCardContainer extends Component {
    render() {
        const { bigImageUrl, title, url, rating, price, rated, appDescription } = this.props;
        return (
            <>
                <img className="musicImage" alt="largeImage" src={bigImageUrl} />
                <div className="appCard">
                    <img className="img-fluid" alt="appIcon" src={url} />
                    <div className="app-details">
                        <h3 className="app-title">{title}</h3>
                        <p className="grey-text">
                            {rating}&nbsp;
                            <img className="rating-star-icon" alt="rating star" src={starIcon} />&nbsp;
                            {rated}&nbsp;
                            {price > 0 && '$' + price}
                        </p>
                        <p className="grey-text">{appDescription}</p>
                    </div>
                </div>
            </>
        );
    }
}
export default SingleCardContainer;

SingleCardContainer.propTypes = {
    bigImageUrl: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    appDescription: PropTypes.string
};
