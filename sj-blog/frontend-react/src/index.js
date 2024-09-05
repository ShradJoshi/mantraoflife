/* eslint-disable */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import ListPage from './components/ListPage';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import About from './components/About';
import Home from './components/Home';
import Subscribe from "./components/Subscribe";
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';



import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router';


// React component
const Main = (props) => (

  <div className="container ">
    {/*<h1> Main Router </h1>*/}
      <header className="blog-header py-3 border-shade pad">
          <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-8 pt-1">


                  <img className="text-muted"
                       src={config.apiEndpoint + 'media/logo_co9Rsec.png'}
                       width={160} height={75}
                       alt="50*50"
                  />
              </div>
              {/*<div className="col-4 text-center">*/}
              {/*    <a className="blog-header-logo text-dark" href="#">Mantra Of Life</a>*/}
              {/*</div>*/}
              <Subscribe />
          </div>
      </header>
      <div>
&nbsp;
      </div>

    <div className="nav-scroller py-1 mb-2 border-shade">
        <nav className="nav d-flex justify-content-between ">
            <a className="p-2 text-white" href="#">Home</a>
            <a className="p-2 text-white" href="/#/about">About Me</a>
            <a className="p-2 text-white" href="/#/list">Blog</a>
            <a className="p-2 text-white" href="#"></a>
            <a className="p-2 text-muted" href="#"></a>
            <a className="p-2 text-muted" href="#"></a>
            <a className="p-2 text-muted" href="#"></a>
            <a className="p-2 text-muted" href="#"></a>
            <a className="p-2 text-muted" href="#"></a>


        </nav>


    </div>

      {/*<li className="nav-item">*/}
            {/*    <a className="nav-link disabled" href="#">Disabled</a>*/}
            {/*</li>*/}

      {/*<a href="/#/list"> List View </a> &nbsp;*/}


    <Router history={hashHistory} >

      <Route path="/" component={Home} />
      <Route path="list" component={ListPage}/>
      <Route path="show" component={DetailPage}/>
      <Route path="about" component={About}/>



    </Router>
      <div>
          &nbsp;
      </div>
      <Footer/>
    </div>

)

import reducers from './reducers'
import config from "./config";
const store = createStore(reducers);

/* Render with redux, ignore redux for right now, not using yet. */

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
