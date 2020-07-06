import React, { Component } from "react";
import PropTypes from 'prop-types';
import starIcon from './Images/starIcon.svg';

class SingleAppContainer extends Component {
  render() {
    const {listNum, url, title, category, rating} = this.props;

    return (
      <>
        <p class="num">{listNum}</p>
        <img
          class="img-fluid"
          alt="icon 1"
          src={url}
        />
        <div class="app-details">
          <h3 class="app-title">{title}</h3>
          <p class="grey-text">{category} - Category</p>
          <p class="grey-text">
            {rating}
            <img
              class="rating-star-icon"
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
