import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import './AppOfTheWeek.style.css'

class AppOfTheWeek extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="app-of-the-week">
                <div className="text">
                    <h2 className="header">{data.title}</h2>
                    <p className="description">{data.card.app.appDescription}</p>
                    <img className="icon-img" alt="Strata Icon" src={data.card.app.url} />
                    <h3 className="app-name">{data.card.app.title}</h3>
                    <p className="developer">{data.card.app.developer}</p>
                    <p className="rating">{data.card.app.rating}</p>
                    <p className="reviews">{data.card.app.review}</p>
                    <p className="rated">{data.card.app.rated}</p>
                </div>
            </div>
        );
    }
}

export default AppOfTheWeek;

AppOfTheWeek.propTypes = {
    data: PropTypes.object.isRequired
};
