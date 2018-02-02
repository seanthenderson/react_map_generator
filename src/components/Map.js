import React, { Component } from 'react';
import styled from 'styled-components';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapWrapper extends Component {
	render() {
		return (
			<Map 
				id="map" 
				//style={style}
				google={this.props.google} 
				zoom={2}
				initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
			>
				<Marker 
					onClick={this.onMarkerClick}
		      name={'Current location'} 
				/>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAaNJxJCuP05lZre6EIh7fHC77ebd57KQw"
})(MapWrapper);