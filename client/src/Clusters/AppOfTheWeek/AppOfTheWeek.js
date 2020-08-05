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
              <img className="icon-img" alt="Strata Icon" src={data.card.app.url}/>
              <div>
                <h3 className="app-name">{data.card.app.title}</h3> 
                <div className="developer">{data.card.app.developer}</div>
              </div>
            </div>

            <div className="decide-bar-container">
              <div className="content">
                <div className="primary">
                  {data.card.app.rating}
                  <img 
                    className="rating-star-icon"
                    alt="rating star"
                    src={starIcon}
                  />
                </div>
                <div className="secondary">{data.card.app.review}</div>
              </div>
              <div className="content">
                <div className="secondary">{data.card.app.rated}</div>
              </div>
              <Button variant="outlined">Install</Button>
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
