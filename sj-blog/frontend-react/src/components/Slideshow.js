
import {Carousel}  from 'react-bootstrap';
import config from '../config';

// import React, { useState } from 'react'
import React from 'react'


class Slideshow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // };
    componentDidMount() {
        console.log('render carousel')
    }


    render(){
        return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={config.apiEndpoint + 'media/scaleimg1.jpg'}
                        width={900} height={500}
                        alt="900x500"
                    />
                    <Carousel.Caption>
                        <h3>S.J. Photography</h3>
                        <p>Welcome to mantra of life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={config.apiEndpoint + 'media/nature.jpg'}
                        width={900} height={500}
                        alt="900x500"
                    />
                    <Carousel.Caption>
                        <h3>S.J. Photography</h3>
                        <p>Welcome to mantra of life</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={config.apiEndpoint + 'media/scaleimg3.jpg'}
                        width={900} height={500}
                        alt="900x500"
                    />

                    <Carousel.Caption>
                        <h3>S.J. Photography</h3>
                        <p>Welcome to mantra of life</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }

}
export default Slideshow;