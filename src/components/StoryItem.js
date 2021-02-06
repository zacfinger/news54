import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class StoryItem extends Component {
	static propTypes = {
		story: PropTypes.object.isRequired,
		isLg: PropTypes.bool.isRequired
	}

	render() {
		const { guid, title } = this.props.story;
		const isLg = this.props.isLg;
		return (
			<Link className={'CardContainer-gutterSpacing--sm ' + (isLg ? 'col-8' : 'col-4')} to={`/story/${guid}`}>
			    <div className="card bg-dark text-white">
				<img className="card-img" src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
				<div className="p-0 card-img-overlay h-100 d-flex flex-column justify-content-end">
					<div className="Card-textContainer w-100 p-2">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{isLg.toString()}
			This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little big longer.
						</p>
					</div>
				</div>
			    </div>
			</Link>
		);
	}
}

export default StoryItem;
