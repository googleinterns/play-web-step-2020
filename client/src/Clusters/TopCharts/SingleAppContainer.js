import React, { Component } from "react";
import PropTypes from 'prop-types';
import starIcon from './Images/starIcon.svg';

class SingleAppContainer extends Component {
  render() {
    const {listNum, url, title, category, rating} = this.props;

    return (
      <>
        <p className="num">{listNum}</p>
        <img
          className="img-fluid"
          alt="icon 1"
          src={url}
        />
        <div className="app-details">
          <h3 className="app-title">{title}</h3>
          <p className="grey-text">{category} - Category</p>
          <p className="grey-text">
            {rating}
            <img
              className="rating-star-icon"
              alt="rating star"
              src= {starIcon}
            />
          </p>
        </div>
      </>
    );
  }
}
export default SingleAppContainer;

SingleAppContainer.propTypes = { 
    listNum: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number
};
