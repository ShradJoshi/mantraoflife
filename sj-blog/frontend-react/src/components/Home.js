/* eslint-disable */
import React from 'react';
import axios from 'axios';
import config from "../config";
import Slideshow from "./Slideshow";
import Gallery from "./Gallery";

class Home extends React.Component {
  constructor(props) {
    super(props);


  }
    componentDidMount() {

    }

  //


  render() {
    return (
      <div className="container">
          <Slideshow />
          <div className="pad">
              <center>
                  <br/>
                  <h3> Mantra of Life candles are out now in Colrain and Snow Shop.</h3>
              <img src="https://sbo.tech/web/image/4122/colrainandsnowshop.png" width="50%"/><br/><br/>
                  <button  className="btn btn-outline-secondary"><a href="https://colrain.andsnow.shop">Shop Now</a></button>
                  </center>
              <br/>
              <h3 ><center> Gallery</center> </h3>
              <br/>

              <Gallery />
          </div>
      </div>
    );
  }
 }


export default Home;
