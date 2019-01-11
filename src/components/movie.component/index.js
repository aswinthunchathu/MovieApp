import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Rating from '../rating.component';
import UserRating from '../user-rating.component';
import ImageLoader from '../../components/image-loader.component';

class Movie extends Component {

    //type checking goes here
    static propTypes = {
        movie: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            showFullPlot: false,
        };
    }
    
    ///This function is to show the full description on clicking read more
    toggleFullText = () => {
        this.setState({
            showFullPlot: !this.state.showFullPlot
        })
    }

    /*
        This function limit the text to given characters 
        or words
        @param : text = string
        @param : characters = number
        return : string
     */
    limitText = (text, characters = 200) => {

        if (text.length > characters) {
            let newText = '';
            const words = text.split(' ');
            for (let i = 0; i < words.length; i++) {
                if ((newText + words[i]).length > characters) {
                    break;
                }

                newText += `${words[i]} `;
            }
            return (
                <div>
                    {`${newText} `}
                    <button type="button" className="btn btn-link"  onClick={this.toggleFullText} >show more</button>
                </div>
            );
        }

        return (<div>{text}</div>);
    }

    render() {
        const { movie } = this.props;

        return (
            <div movie="" className="row text-white">
                <div className="col-lg-3 col-md-4 text-center">
                    <ImageLoader title={movie.Title} imageUrl={movie.Poster}></ImageLoader>
                    <div className="mt-2 d-none d-md-block">
                            <UserRating ratings={movie.Ratings}></UserRating>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 mt-3 mt-md-0">
                    <div className="row">
                        <div className="col-12 text-uppercase">
                            <h1 className="mb-4">{movie.Title}</h1>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div>
                                        <span className="mr-3 font-weight-bold">{movie.Year}</span>
                                        <span className="mr-3 border pl-1 pr-1 border-white rounded-pill bg-white text-dark font-weight-bold">{movie.Rated}</span>
                                        <span className="d-inline-block">
                                            <span className="text-muted">IMDB&nbsp;</span>
                                            <Rating rating={Number(movie.imdbRating) * 10}></Rating>
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="mr-2 text-capitalize">{movie.Type}</span>|
                    <span className="ml-2">{movie.imdbVotes}</span>
                                        <i className="fas fa-heart ml-2 text-danger"></i>
                                    </div>
                                    <div className="mt-3">
                                        <span className="text-muted">Genere :</span>&nbsp;{movie.Genre.split(',').join(' | ')}
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-muted">Language :</span>&nbsp; {movie.Language.split(',').join(' | ')}
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-muted">Released :</span>&nbsp;{movie.Released}
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-muted">Duration :</span>&nbsp;{movie.Runtime}
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-muted">Award(s) :</span>&nbsp;{movie.Awards}
                                    </div>

                                </div>
                                <div className="col-md-12 col-lg-6 mt-3 mt-lg-0">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="text-muted mb-0">Director</h5>
                                            <div>{movie.Director}</div>
                                            <h5 className="text-muted mb-0 mt-2">Cast</h5>
                                            <ul className="mb-0">
                                                {movie.Actors.split(',').map((item, index) => <li key={index}>{item}</li>)}
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <h5 className="text-muted mb-0">Writer</h5>
                                            <ul className="mb-0">
                                                {movie.Writer.split(',').map((item, index) => <li key={index}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            {this.state.showFullPlot ? movie.Plot : this.limitText(movie.Plot)}
                            {this.state.showFullPlot &&  <button type="button" className="btn btn-link"  onClick={this.toggleFullText}>&nbsp;show less</button>}
                        </div>

                        <div className="mt-2 col-12 d-block d-md-none">
                            <UserRating ratings={movie.Ratings}></UserRating>
                         </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Movie;
