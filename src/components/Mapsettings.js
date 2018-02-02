import React, { Component } from 'react';

class Mapform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zoomLevel: 2,
			centerLat: '',
			centerLong: '',
			mapWidth: '',
			mapHeight: '',
			apiKey: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	} 
	render() {
		return (
			<form className="mapSettings">
				<h2><i class="fa fa-plus-circle" aria-hidden="true"></i> Map Settings</h2>
				
				<fieldset>
					<label for="zoomLevel">Map zoom level</label>
					<input type="number" id="zoomLevel" defaultValue={this.state.zoomLevel} placeholder="(1-22)" onChange={this.handleChange} />
				</fieldset>

				<fieldset>
					<p><strong>Map Center Point</strong><a href="https://www.latlong.net/" target="_blank" class="small-link">Find coordinates: latlong.net</a></p>
					<label for="centerLat">Latitude</label>
					<input type="number" id="centerLat" defaultValue={this.state.centerLat} /> 
					<label for="centerLong">Longitude</label>
					<input type="number" id="centerLong" defaultValue={this.state.centerLong} />
				</fieldset>
				
				<fieldset>
					<p><strong>Map Dimensions</strong></p>
					<label for="mapWidth">Width</label>
					<input type="number" id="mapWidth" defaultValue={this.state.mapWidth} placeholder="%" />
					<label for="mapHeight">Height</label>
					<input type="number" id="mapHeight" defaultValue={this.state.mapHeight} placeholder="px" />
				</fieldset>

				<fieldset>
					<p><strong>Google Maps API key</strong></p>
					<label for="apiKey">Key</label>
					<input id="apiKey" value={this.state.apiKey}/>
					<a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" class="small-link">Get a key</a>
				</fieldset>
			</form>
		)
	}
}

export default Mapform;