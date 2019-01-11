import React, { Component } from 'react';

import Movie from '../components/movie.component';
import Serach from '../components/search.component';
import NoMovie from '../components/no-movie.component';
import Spinner from '../components/spinner.component';

class SerachResults extends Component {

  render() {
    const { fetchResult, data: movie, fetched, fetching, error } = this.props;
    return (
      <div className="container mt-4">
        <Serach onSearch={fetchResult}></Serach>
        <div className="container mt-3">
          {
            error ? (<NoMovie icon="far fa-frown-open fa-7x" cssClass="text-danger" text="No Movies found"></NoMovie>) :
              fetching ? (<Spinner></Spinner>) :
                !fetched ? (<NoMovie icon="fas fa-grin-alt fa-7x" cssClass="text-muted" text="Search for your favourite movie"></NoMovie>) : (<Movie movie={movie}></Movie>)
          }
        </div>
      </div>
    );
  }
}

export default SerachResults;
