import React from 'react'
import Company_Logo_54News from '../img/Company_Logo_54News.png'

const Header = () => {
	return (
		<header id="header" className="navbar fixed-top">
			<div className="container">
				<div className="col-5 col-lg-4">
					<a href="/">
						<img src={Company_Logo_54News} alt='' />
					</a>
				</div>
				<div className="col-12 col-sm-7 col-lg-8">
				</div>
			</div>
		</header>
	)
}

export default Header
