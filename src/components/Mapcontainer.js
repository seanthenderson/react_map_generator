import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './Map.js';

const MapWrapper = styled.div`
	margin: 20px auto;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	justify-items: center;
`;

const MapMenu = styled.div`
	background: #333;
	color: #e0e0e0;
	overflow: scroll; 
	grid-column: span 2;
	justify-self: stretch;
`;

const StyledMap = styled(Map)`
	grid-column: 3 / span 8;
	justify-self: stretch;
`;

class Mapcontainer extends Component {
	render() {
		return (
			<MapWrapper>
				<MapMenu>
					<h2>Map Menu</h2>
					<div class="menu-section-header"></div>
					<div class="menu-section first"></div>
				</MapMenu>
				
				<StyledMap />
			</MapWrapper>
		)
	}
}

export default Mapcontainer;