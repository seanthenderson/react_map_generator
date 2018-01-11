import React, { Component } from 'react';

class Addmarker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locationName: 'Test',
			latitude: '',
			longitude: '',
			imageLink: '',
			locationDescription: '',
			locationLink: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({locationName: event.target.value});
	}
	render() {
		return (
			<form id="addMarker">
				<h2><i class="fa fa-plus-circle" aria-hidden="true"></i> Add A Marker</h2>
				<fieldset>
					<label for="locationName">Location Name</label>
					<input type="text" id="locationName" defaultValue={this.state.locationName} onChange={this.handleChange} /> 
				</fieldset>
				<fieldset>
					<label for="latitude">Latitude</label>
					<input type="number" id="latitude" defaultValue={this.state.latitude}/> 
					<label for="longitude">Longitude</label>
					<input type="number" id="longitude" defaultValue={this.state.longitude}/> 
					<a href="https://www.latlong.net/" target="_blank" class="small-link">Find coordinates: latlong.net</a>
				</fieldset>
				<fieldset>
					<label for="locationImage">Image Link</label>
					<input type="url" id="locationImage" defaultValue={this.state.locationImage} />
				</fieldset>
				<fieldset>
					<label for="locationDescription">Location description</label>
					<textarea id="locationDescription" defaultValue={this.state.locationDescription}></textarea> 
				</fieldset>
				<fieldset>
					<label for="locationLink">Link to external site</label>
					<input type="url" id="locationLink" defaultValue={this.state.locationLink} />	
				</fieldset>
				<button id="addMarkerButton">Add Marker</button>
				
				<p>Info window preview:</p>
				<div class="infowindow-preview">
					<div id="locationThumb"><img src=" locationImage" /></div>
					<h2>{this.state.locationName}</h2>
					<p>{this.state.locationDescription}</p>
					
					<p><a href="locationLink">More Info</a></p>
				</div>
			</form>
		)
	}
}

export default Addmarker;