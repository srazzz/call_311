import React from 'react'
import './homepage.css'
// import { Chart } from 'chart.js'
import Maindata from './maindata'
function Home() {

	return (
		<>
		
		<nav className="navbar">
				<a href="https://portal.311.nyc.gov/" className="logo"><img alt="logo" src="https://s3.amazonaws.com/cms.ipressroom.com/256/files/20225/6297c470b3aed342df72a0f2_311+Logo+Thumbnail/311+Logo+Thumbnail_2bcac346-a900-4893-a455-01ceacf7ccdd-prv.png" /></a>
				<input type="text" id="searchInput" placeholder="Search.." />
				<div id='submitsearch'>
					<span>Search</span>
				</div>
				<div className="nav-links">
					<ul className="nav-menu">
						<li className="active"><a href="a">Home</a></li>
						<li><a href="a">About Us</a></li>
						<li><a href="a">Services</a></li>
					</ul>
				</div>
				<i className='bx bx-grid-alt menu-hamburger'></i>
		</nav>
		
		<div className="whole">
			<div className="maindata">
				<Maindata/>
			</div>
			
		</div>

		</>
	)
}

export default Home
