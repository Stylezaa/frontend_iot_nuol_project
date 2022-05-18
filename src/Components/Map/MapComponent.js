import React, { useState, useEffect, useCallback } from 'react';
import MapView from './MapView';
import 'leaflet/dist/leaflet.css';
import Axios from 'axios';
import ListView from './ListView';
import DetailsView from './DetailsView';
import ProfileComponent from '../ProfileComponent';

const api = 'http://localhost:8000/api/sensor/1/get/all';

function MapComponent() {
	const [locationArray, setLocationArray] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [mapCenter, setMapCenter]= useState([17.956352, 102.603704]);
	console.log(mapCenter);
	
	function sortedLocationArray(locations) {
		return [...locations].sort((location1, location2) => {
			return location2.sensor.confirmed - location1.sensor.confirmed;
		});
	}

	const onSelectLocation = useCallback((id) => {
        // console.log(id)
		const location = locationArray.find(_location => _location.id === id);
		if (location === undefined) {
			setSelectedLocation(null);
			return;
		}
		setSelectedLocation(location);
		const { coordinates: { latitude, longitude } } = location;
		setMapCenter([latitude, longitude]);
	}, [locationArray]);

	const onDeselectLocation = useCallback(() => {
		setSelectedLocation(null);
	}, []);

	useEffect(() => {
		Axios.get(api).then(response => {
			const sortedLocations = sortedLocationArray(response.data);
			setLocationArray(sortedLocations);
			// console.log(sortedLocations)

			// setLocationArray(response.data.station_1);
		}).catch(error => {
			console.log(error);
		})
	}, []);

	let detailsView = null;
	if (selectedLocation != null) {
		detailsView = <DetailsView location={selectedLocation} onClickClose={onDeselectLocation} />
	}

	return (
		<div className="App">
			<ProfileComponent />
			<ListView 
				locationArray={locationArray} 
				selectedLocation={selectedLocation} 
				onSelectItem={onSelectLocation} 
				onDeselectItem={onDeselectLocation} />
			<MapView 
				locationArray={locationArray} 
				mapCenter={mapCenter} 
				onSelectMarker={onSelectLocation} />
			{detailsView}
		</div>
	);
}

export default MapComponent;
