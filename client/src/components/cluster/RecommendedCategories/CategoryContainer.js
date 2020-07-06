import React, { Component } from "react";
import PropTypes from "prop-types";

class CategoryContainer extends Component {
    render() {
        const {category, url} = this.props;

        return (
            <>
              <h6>{category}</h6>
              <img
                alt="Category Icon"
                src={url} 
              />
            </>
        );
    }
}

export default CategoryContainer;

CategoryContainer.propTypes = {
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
