import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class StoryItem extends Component {
	static propTypes = {
		story: PropTypes.object.isRequired
	}

	render() {
		const { guid, title } = this.props.story;
		return (
			<div>
				<Link to={`/story/${guid}`}>
					{title}
				</Link>
			</div>
		);
	}
}

export default StoryItem;
