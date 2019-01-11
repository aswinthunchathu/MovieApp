import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header.component';
import SearchResults from './containerComponent/search-result.container';
import FeaturedMovies from './containerComponent/featured-movie.container';

//Handle invalid URLs
const NoMatch = ({ location }) => (
    <div className="container card-component text-center">
        <h1 className="text-danger">
            Page not found
        </h1>
    </div>
);

const AppRoute = () => {
    return (
        <div className="d-flex flex-column h-100">
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={FeaturedMovies} />
                        <Route exact path="/Search" component={SearchResults} />
                        <Route component={NoMatch} />
                    </Switch>
                </>
            </Router>
        </div>
    )
}

export default AppRoute;