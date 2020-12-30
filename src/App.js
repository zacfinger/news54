import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Stories from './components/Stories';
import StoryPage from './components/StoryPage';
import config from './config'
import './App.css';

const App = () => {

  return (
	  <Router>
    		<Fragment>
    			<Header />
	  		<Route exact path="/" component={Stories} />
			<Route exact path="/story/:guid" component={StoryPage} />
    		</Fragment>
	  </Router>
  );
}

export default App;
