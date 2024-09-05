/* eslint-disable */
import React from 'react';
import axios from 'axios';
import DetailPage from './DetailPage';
import config from '../config';
import '../App.css';
// import {Card} from 'bootstrap';

console.log(' Printing config',config)
class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`${config.apiEndpoint}posts/?format=json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data; //.map(obj => obj.data);
        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
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

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <div className="row" >
        {this.state.posts.map(post =>
          <div key={post.id} className="col-md-4">
            <div className="card border-shade buffer">
              <div className={"card-img-top"}>
                <img src={post.file}/>
              </div>
              <div className={"card-body"}>
                <div className={"card-title"}>
                  {post.title}
                </div>
                <a href= {`#/show?id=${post.id}`}>
                   <button type="button" className="btn btn-primary">See More</button>
                </a>
              </div>
            </div>
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
          : this.renderPosts()}
          <hr />
      </div>
    );
  }
}

export default ListPage;
