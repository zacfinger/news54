import React, { Component } from 'react'
import StoryItem from './StoryItem';
import axios from 'axios';
import config from '../config'

export class Stories extends Component {
	state = {
		stories: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get(`http://` + config.domain + `/api/`)
		.then(res => this.setState({
			stories: res.data,
			isLoaded: true
		}))
		.catch(err => console.log(err));
	}

	render() {
		const { stories, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<div>
					{ stories.map(story => (
						<StoryItem key={story.guid} story={story} />
					)) }
				</div>
			);
		}

		return <h3>Loadng...</h3>;
	}
}

export default Stories
