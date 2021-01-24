import React from 'react'
import TopHeader from './TopHeader'
import Company_Logo_54News from '../img/Company_Logo_54News.png'

const Header = () => {
	return (
		<header id="header" className="navbar fixed-top">
			<div className="container-md">
				<div id="CollapsibleHeader-logo" className="col-4 col-lg-3">
					<a href="/">
						<img src={Company_Logo_54News} alt='' />
					</a>
				</div>
				<div id="HeaderMenu" className="col-8 col-lg-9">
					<TopHeader />
					<div className="CollapsibleHeader-HeaderMenu" id="CollapsibleHeader-HeaderMenu">
						<nav class="navbar navbar-expand-md navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
		{/* potentially remove after this line */}
		<div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Top Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
		{/* potentially remove before this line */}
</nav>
					</div>
				</div>
				<div className="col-12 d-lg-none">
				<nav className="navbar navbar-expand-md navbar-light bg-light">
                                        <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
                </nav>

				</div>
			</div>
		</header>
	)
}

export default Header
