import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Stories from './components/Stories';
import StoryPage from './components/StoryPage';
import config from './config'
import './App.css';

export default class App extends Component {

	constructor(props) {
    		super(props)
    		this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
		this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
  	}

	componentDidMount() {
		window.addEventListener("scroll", this.resizeHeaderOnScroll);

		const handler = e => this.setState({matches: e.matches});
    		window.matchMedia("(min-width: 768px)").addListener(handler);
	}

	// Resize header on scroll: https://stackoverflow.com/questions/50520455/resize-header-onscroll-react
	// Media query in React: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs
	// Calling this.state in resizeHeaderOnScroll(): https://stackoverflow.com/questions/45998744/react-this-state-is-undefined
	resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 62,
			headerEl = document.getElementById("header"),
			pageEl = document.getElementById("page"),
			topHeaderEl = document.getElementById("CollapsibleHeader-topHeader"),
			headerMenuEl = document.getElementById("CollapsibleHeader-HeaderMenu"),
			bottomHeaderEl = document.getElementById("CollapsibleHeader-bottomHeader");
		
		if(this.state.matches){

			if (distanceY > shrinkOn) {
				// User scrolled below 62px
				headerEl.classList.add("CollapsibleHeader-collapse");
				
				pageEl.classList.remove("pt-0");
				pageEl.classList.add("pt-md-62");
				
				topHeaderEl.classList.remove("CollapsibleHeader-topHeader");
				topHeaderEl.classList.add("CollapsibleHeader-topHeader--collapse");

				headerMenuEl.classList.remove("CollapsibleHeader-HeaderMenu");
				headerMenuEl.classList.add("CollapsibleHeader-HeaderMenu--collapse");

				bottomHeaderEl.classList.add("CollapsibleHeader-bottomHeader--collapse");
			
			} else {
				// User scrolled to top
				headerEl.classList.remove("CollapsibleHeader-collapse");
				
				pageEl.classList.add("pt-0");
				pageEl.classList.remove("pt-md-62");

				topHeaderEl.classList.remove("CollapsibleHeader-topHeader--collapse");
				topHeaderEl.classList.add("CollapsibleHeader-topHeader");

				headerMenuEl.classList.remove("CollapsibleHeader-HeaderMenu--collapse");
				headerMenuEl.classList.add("CollapsibleHeader-HeaderMenu");

				bottomHeaderEl.classList.remove("CollapsibleHeader-bottomHeader--collapse");
			}
		}
	}
	render() {
		return(
	  		<div id="page">
				<Router>
    					<Header />
	  				<div className="PageBody container">
						<Route exact path="/" component={Stories} />
						<Route exact path="/story/:guid" component={StoryPage} />
					</div>
	  			</Router>
	  		</div>
  		);
	}
}

