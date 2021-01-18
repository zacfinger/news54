import React from 'react'
import TopHeader from './TopHeader'
import Company_Logo_54News from '../img/Company_Logo_54News.png'

const Header = () => {
	return (
		<header id="header" className="navbar fixed-top">
			<div className="container">
				<div id="CollapsibleHeader-logo" className="col-5 col-lg-4">
					<a href="/">
						<img src={Company_Logo_54News} alt='' />
					</a>
				</div>
				<div id="HeaderMenu" className="col-7 col-lg-8">
					<TopHeader />
				</div>
			</div>
		</header>
	)
}

export default Header
