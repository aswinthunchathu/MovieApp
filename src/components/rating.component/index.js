import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Rating extends Component {

    static propTypes = {
        rating: PropTypes.number
    }

    render() {
        const {rating} = this.props;
        const style = {
            width : `${(rating ? rating : 0)}%`
        };

        return (
            <span title={rating} star-rating="" className="d-inline-block text-warning position-relative">
                <span className="d-flex">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </span>
                <span className="d-flex position-absolute stars-filled" style={style}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </span>
            </span>
        );
    }
}

export default Rating;
