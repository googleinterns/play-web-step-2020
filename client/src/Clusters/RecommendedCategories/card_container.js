import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import './card_container_style.css';

class CardContainer extends Component {
    
    render() {
        const {category, url} = this.props;

        return (
            <Card className="card" >
                <CardContent>
                    <Box className="box">
                        <div className="text-section">
                            <Typography variant="h6" color="textSecondary">
                                {category}
                            </Typography>
                        </div>
                        <div className="img-section">
                            <img
                                class="img-section"
                                alt="Category Icon"
                                src={url}
                            />
                        </div>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default CardContainer;

CardContainer.propTypes = {
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
