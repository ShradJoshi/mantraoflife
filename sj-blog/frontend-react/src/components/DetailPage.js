/* eslint-disable */
import React from 'react';
import axios from 'axios';
import config from "../config";
import '../App.css';
import Comment from "./Comment";


class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        let id = this.props.location.query.id;
        axios.get(`${config.apiEndpoint}posts/${id}/?format=json`)
            .then(res => {
                // Transform the raw data by extracting the nested posts
                const post = res.data; //.map(obj => obj.data);
                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    post,
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

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  handleClick() {
    console.log('save your data', this.props.post)

  }


  render() {
    let { post } = this.state
    return (
        <div>
        &nbsp;
      <div className="wrapper border-shade pad">

          <img className='detail-image' src={post.file} width={"50%"} align={'left'}/>


              <div dangerouslySetInnerHTML={{__html: post.content}} />
      </div>
            <div>
      <Comment post={post}/>


            </div>



      </div>


    );
  }
 }


export default DetailPage;
