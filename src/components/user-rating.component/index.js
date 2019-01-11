import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Rating from '../rating.component';

class UserRating extends Component {

    static propTypes = {
        rating: PropTypes.number
    }

    generateRatings() {
        const { ratings } = this.props;
        let starRating;

        return ratings.map((item, index) => {
            
            starRating = item.Value;
            starRating = starRating.split(' ').join('');
            if (starRating.includes('%')) {
                starRating = Number(starRating.substring(0, starRating.indexOf('%')));
            } else if (starRating.includes('/100')) {
                starRating = Number(starRating.substring(0, starRating.indexOf('/100')));
            } else if (starRating.includes('/10')) {
                starRating = Number(starRating.substring(0, starRating.indexOf('/10'))) * 10;
            }

            return (
                <li key={index}>
                    <span className="text-muted mr-3 d-md-block">{item.Source}</span>
                    <Rating rating={Number(starRating)}></Rating>
                </li>
            )
        })
    }

    render() {
        return (
            <ul user-rating="" className="User-ratings pl-0 text-left">
                {
                    this.generateRatings()
                }
            </ul>
        );
    }
}

export default UserRating;
