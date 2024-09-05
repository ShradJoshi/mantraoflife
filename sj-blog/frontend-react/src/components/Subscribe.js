import React from "react";
import axios from 'axios';
import config from '../config';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: true,
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({email: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
        axios.post(`${config.apiEndpoint}subscribers/?format=json`, {email: this.state.email})
            .then((response) =>{
                console.log('response from post ->', response)
                alert("Thank you for subscribing!")
            })
            .catch((error) => {
                console.error('we had an error: ', error)
                alert(error.messages.email)
            })
    }
    componentDidMount() {

    }

    //


    render() {
        return (

<div className="col-4 d-flex justify-content-end align-items-center">

    <div className="input-group mb-3">
        {/*<form onSubmit={this.handleSubmit}>*/}

        <input type="text" className="form-control"  value={this.state.email} onChange={this.handleChange} placeholder="Your Email"
               aria-label="Recipient's Email" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleSubmit}>Subscribe!
            </button>
        </div>
        {/*</form>*/}
    </div>
</div> );
    }
}


export default Subscribe;