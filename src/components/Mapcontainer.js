import React, { Component } from 'react';
import Map from './Map.js';

class Mapcontainer extends Component {
	render() {
		return (
			<div id="map-wrapper">
				<div id="map-menu">
					<h2 id="menuPlaceholder">Map Menu</h2>
					<div class="menu-section-header"></div>
					<div class="menu-section first"></div>
				</div>
				
				<Map />
			</div>
		)
	}
}

export default Mapcontainer;