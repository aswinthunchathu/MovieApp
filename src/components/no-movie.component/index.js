import React from 'react';

import './index.css';

const NoMovie = (props) => {
    return (
        <div no-movie='' className={`d-flex flex-column justify-content-center align-items-center w-100 no-content ${props.cssClass}`}>
            <h2 className="text-capitalize">{props.text}</h2>
            <i className={props.icon}></i>
        </div>
    )
}

export default NoMovie;