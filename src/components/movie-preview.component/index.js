import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import ImageLoader from '../../components/image-loader.component';

class MoviePreview extends Component {

    //type checking goes here
    static propTypes = {
        movie: PropTypes.object.isRequired
    }

    render() {
        const { movie } = this.props;

        return (
            <div movie-preview="" className="row text-white">
                <div className="col-md-5 text-center position-relative">
                     <i className="fas fa-star text-warning fa-2x position-absolute star-position"></i>
                    <ImageLoader title={movie.Title} imageUrl={movie.Poster}></ImageLoader>
                </div>
                <div className="col-md-7 mt-3 mt-md-0">
                    <h4>{movie.Title}</h4>
                    <div className="mt-1 text-muted font-weight-bold">{movie.Year}</div>
                    <div className="mt-1 text-muted font-weight-bold">{movie.Awards}</div>
                    <div className="mt-2 text-justify">{movie.Plot}</div>
                </div>
            </div>
        );
    }
}

export default MoviePreview;
