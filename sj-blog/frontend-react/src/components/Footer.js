import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: ''
        };
    }

    componentDidMount() {
        let d = new Date()
        this.setState({currentYear: d.getFullYear()});

    }


    render() {
        let { currentYear } = this.state;
        return(

            <footer className="page-footer font-small cyan darken-3 border-shade">




                <div className="col-md-12 py-3">
                        <div className="text-center">




                        <a className="fb-ic" href='https://www.facebook.com/SJ-Photography-2286372988260452/'>
                            <i className="fab fa-facebook-f fa-lg text-white mr-4 fa-2x"> </i>
                        </a>

                        <a className="li-ic" href='https://www.linkedin.com/in/shraddha-joshi-437356173'>
                            <i className="fab fa-linkedin-in fa-lg text-white mr-4 fa-2x"> </i>
                        </a>

                        <a className="ins-ic" href='https://www.instagram.com/shrad_joshi/'>
                            <i className="fab fa-instagram fa-lg text-white mr-4 fa-2x"> </i>
                        </a>
                        <div>
                            &nbsp;
                        </div>


                        <div className="footer-copyright text-white  mr-4">

                            <p> © {currentYear} Mantra Of Life
                            </p>
                        </div>
                    </div>
                </div>


            </footer>





        );
    }


}
export default Footer;
