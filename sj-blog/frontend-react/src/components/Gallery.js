import React from 'react';
import axios from 'axios';
import config from '../config';
import '../App.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        axios.get(`${config.apiEndpoint}pictures/?format=json`)
            .then(res => {
                // Transform the raw data by extracting the nested posts
                const pictures = res.data; //.map(obj => obj.data);
                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    pictures,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    renderPictures() {
        if(this.state.error) {
            return this.renderError();
        }

        return (
            <div className="row" >
                {this.state.pictures.filter((arg)=>
                    arg.id >= 4  ? arg: null).map(picture=>
                        <div key={picture.id} className="col-lg-4 col-sm-6 pad-bottom">
                            <a href={picture.file}> <img src={picture.file}   width={300} height={300}  alt=""/></a>
                        </div>

                    )}
            </div>

        );
    }

    render() {
        return (
            <div className={'container'}>
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPictures()}
                <hr />
            </div>
        );
    }
}

export default Gallery;