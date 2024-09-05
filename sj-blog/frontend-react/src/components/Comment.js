import React from "react";
import axios from 'axios';
import config from '../config';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            text:'',
            loading: true,
            error: null
        };
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleAuthor(event) {
        this.setState({author: event.target.value });
    }
    handleText(event){
        this.setState({text: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        let postUrl = `${config.apiEndpoint}posts/${this.props.post.id}/`
        axios.post(`${config.apiEndpoint}comments/?format=json`, {post: postUrl, author: this.state.author, text: this.state.text})
            .then((response) =>{
                console.log('response from post ->', response)
                // alert("Thank you for your comments!")
                alert('Comment Successfully submitted ' + this.state.author);
            })
            .catch((error) => {
                console.error('we had an error: ', error)
                alert('Empty response! Please fill in all fields');
            })
    }
    componentDidMount() {

    }

    //


    render() {
        let { comments } = this.props.post
        return (

             <div className="wrapper pad">
                <br/>
                <h3>Comments</h3>
                <div className={"border-shade pad"}>
                    { comments && comments.length > 0 ? comments.filter((comment) => {return comment.approved_comment}).map(comment =>
                        <div className="row" key={comment.id}>
                            <div className='col-sm-12'>
                                {comment.text}
                            </div>
                            <div  className='col-sm-12'>
                               Author: <b> {comment.author} </b>
                            </div>
                            <div className='col-sm-12'>
                                <br/>
                            </div>



                        </div>
                    ) : <p> There are no comments yet, please leave one below! </p>}

                </div>

                <h3> Please leave a comment</h3>
                <form onSubmit={this.handleSubmit} className="border-nshade pad">


                    <br/>

                    <input type="text" className="form-control"  value={this.state.author} onChange={this.handleAuthor} placeholder="Your Name"
                           aria-label="Recipient's Name" aria-describedby="button-addon2" /><br/>

                <textarea className="form-control"  value={this.state.text} onChange={this.handleText} placeholder="Your Comments"
                          aria-label="Recipient's comment" aria-describedby="button-addon2" ></textarea>
                <br/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit
                        </button>
                    </div>
                </form>
                </div>
            );
    }
}


export default Comment;