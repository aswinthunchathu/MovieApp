import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class ImageLoader extends Component {

    //type checking goes here
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        title : PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isImageLoaded: false
        };
    }

    //This function is to toggle the image if the path given is invalid
    onImageLoad = () => {
        this.setState({
            isImageLoaded: true
        })
    }


    render() {
        const { imageUrl, title } = this.props;

        return (
            <>
                {
                    /*showing placeholder image initialy*/
                    !this.state.isImageLoaded && (
                        <div image-loader='' className="d-flex justify-content-center align-items-center border border-white no-image">No Image</div>
                    )
                }

                <img src={imageUrl} alt={title} className={`img-fluid ${!this.state.isImageLoaded ? 'd-none' : ''}`} onLoad={this.onImageLoad} />

            </>
        );
    }
}

export default ImageLoader;
