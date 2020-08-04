import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import starIcon from './Images/starIcon.svg';
import '../styles.css';
import './AppOfTheWeek.style.css'

class AppOfTheWeek extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="app-of-the-week">
                <img className="background-img" alt="outdoors" src={data.card.bigImageUrl} />
                <div className="container">
                    <h2 className="header">{data.title}</h2>
                    <p className="description">{data.card.app.appDescription}</p>
                    <div className="icon-list">
                        <div className="content">
                            <img className="icon-img" alt="Strata Icon" src={data.card.app.url}/>
                        </div>
                        <div className="content">
                            <h3 className="app-name">{data.card.app.title}</h3> 
                            <p className="developer">{data.card.app.developer}</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <div className="review-content">
                            <p className="rating">
                            {data.card.app.rating}
                            <img 
                            className="rating-star-icon"
                            alt="rating star"
                            src={starIcon}
                            />
                            </p>
                            <p className="reviews">{data.card.app.review}</p>
                        </div>
                        <div className="line">
                        </div>
                        <div className="rated-content">
                            <p className="rated">{data.card.app.rated}</p>
                        </div>
                        <div className="button">
                            <Button variant="outlined">Install</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppOfTheWeek;

AppOfTheWeek.propTypes = {
    data: PropTypes.object.isRequired
};
