import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class StoryItem extends Component {
	static propTypes = {
		story: PropTypes.object.isRequired,
		isLg: PropTypes.bool.isRequired
	}

	render() {
		const { guid, title, img } = this.props.story;
		const isLg = this.props.isLg;
		return (
			<Link className={'CardContainer-gutterSpacing--sm ' + (isLg ? 'col-8' : 'col-4')} to={`/story/${guid}`}>
			    <div className={'card bg-dark text-white Card-full-container--' + (isLg ? 'lg' : 'sm')}>
				<img className="card-img imageContainer" src={`${img}`} />
				<div className="p-0 card-img-overlay h-100 d-flex flex-column justify-content-end">
					<div className="Card-textContainer w-100 p-2">
						<div className={'Card-full-title--' + (isLg ? 'lg' : 'sm')}>{title}</div>
						{ isLg &&
						<p className="Card-full-description">
							This is a wider card with supporting text 
							below as a natural lead-in to additional content. 
							This content is a little big longer.
						</p>
						}
					</div>
				</div>
			    </div>
			</Link>
		);
	}
}

export default StoryItem;
