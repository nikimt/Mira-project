import React, { Component } from 'react';
import BackgroundImg from '../images/background.png';

var backgroundStyle = {
	width: '100vw',
	height: '100vh',
	opacity: '.7',
	backgroundImage: 'url(' + BackgroundImg + ")"
}

class Background extends Component {
	render() {
		return (
			<section style = { backgroundStyle }>
			</section>)
	}
}

export default Background;