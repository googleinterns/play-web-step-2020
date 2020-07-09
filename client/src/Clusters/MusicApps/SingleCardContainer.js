import React, { Component } from "react";
import PropTypes from 'prop-types';
import starIcon from '../TopCharts/Images/starIcon.svg';

class SingleCardContainer extends Component {
    render() {
        const { bigImage, title, iconUrl, rating, rated, appDescription } = this.props;
        return (
            <>
                <img className="musicImage" alt="largeImage" src={bigImage} />
                <div className="appCard">
                    <img className="img-fluid" alt="appIcon" src={iconUrl} />
                    <div className="app-details">
                        <h3 className="app-title">{title}</h3>
                        <p className="grey-text">{rating}
                            <img className="rating-star-icon" alt="rating star" src={starIcon} />
                            {rated}
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
    bigImage: PropTypes.string,
    iconUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    appDescription: PropTypes.string
};
