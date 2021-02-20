import React, { Component, Fragment } from 'react'
import StoryItem from './StoryItem';
import axios from 'axios';
import config from '../config'

export class Stories extends Component {
	state = {
		stories: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get(`http://` + config.domain + `/api/stories`)
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
				<Fragment>
				    <div className="CardContainer">
					<StoryItem key={stories[0].guid} story={stories[0]} isLg={true} />
					<StoryItem key={stories[1].guid} story={stories[1]} isLg={false} />
					<StoryItem key={stories[2].guid} story={stories[2]} isLg={false} />
				    </div>
				    <div className="CardContainer">
					{ stories.slice(3).map(story => (
						<StoryItem key={story.guid} story={story} isLg={false} />
					)) }
				    </div>
				</Fragment>
			);
		}

		return <h3>Loading...</h3>;
	}
}

export default Stories
