import React, { Component, Fragment } from 'react';
import axios from 'axios';
import config from '../config';

export class StoryPage extends Component {

	state = {
		story: {},
		isLoaded: false
	}

	componentDidMount() {
		console.log("here");
		axios.get(`http://` + config.domain + `/api/story/${this.props.match.params.guid}`)
		.then(res => this.setState({
			story: res.data,
			isLoaded: true
		}))
		.catch(err => console.log(err));
	}

	render() {
		const { story, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<Fragment>
					<h1>{story.title}</h1>
					<p>{story.body}</p>
				</Fragment>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default StoryPage
