import React, { Component } from 'react';

import Spinner from '../components/spinner.component';
import MoviePreview from '../components/movie-preview.component';
import NoMovie from '../components/no-movie.component';

import {FEATURED_MOVIES} from '../constant';

class FeaturedMovies extends Component {

  componentDidMount(){
    this.props.fetchResult(FEATURED_MOVIES);
  }

  render() {
    const { data: movies, fetched, fetching } = this.props;

    return (
      <div className="container mt-4 text-white">
        <div className="row">
          <div className="col-12">
              <h2 className="pb-1 pr-2 border border-left-0 border-right-0 border-top-0 d-inline-block mb-5">Featured Movies</h2>
          </div>
        </div>
        <div className="row">
          {
            fetching ? (<Spinner></Spinner>) :
            fetched && movies.length > 0 ? 
              movies.map((movie, index) => (
                <div className="col-lg-6 featured-movie" key={index}>
                    <MoviePreview movie={movie}></MoviePreview>
                </div>
              )) : (<NoMovie icon="far fa-frown-open fa-7x" cssClass="text-muted" text="No Movies found"></NoMovie>)
          }
        </div>
      </div>
    );
  }
}

export default FeaturedMovies;
