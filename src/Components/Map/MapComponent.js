import React, { useState, useEffect, useCallback } from 'react';
import MapView from './MapView';
import 'leaflet/dist/leaflet.css';
import Axios from 'axios';
import ListView from './ListView';
import DetailsView from './DetailsView';
import ProfileComponent from '../ProfileComponent';

const api = 'https://ceit-iot-api.herokuapp.com/api/sensor/1/get/all';

function MapComponent() {
	const [locationArray, setLocationArray] = useState([]);
	const [locationOne, setLocationOne] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [mapCenter, setMapCenter]= useState([17.938568, 102.625921]);
	const [loading, setLoading] = useState(true)

	
	function sortedLocationArray(locations) {
		return [...locations].sort((location1, location2) => {
			return location2.sensor.confirmed - location1.sensor.confirmed;
		});
	}

	const onSelectLocation = useCallback((id) => {

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
			setLocationOne(sortedLocations.slice(0, 1));
			setLoading(false)
		}).catch(error => {
			console.log(error);
		})
	}, []);

	let detailsView = null;
	if (selectedLocation != null) {
		detailsView = <DetailsView location={selectedLocation} onClickClose={onDeselectLocation} />
	}
	if (loading) {
		return (
			<>
				<div className="hidden lg:flex space-x-4 absolute top-0 left-0 right-0 bottom-0 relative h-screen w-screen bg-slate-400">
					<div className="absolute left-0 top-0 bottom-0 w-96 bg-slate-300">
						<div className="animate-pulse flex space-x-4">
							<div className="flex-1 space-y-6 px-1 my-1">
								<div className="h-20 bg-blue-300 rounded-sm"></div>
								<div className="h-10 bg-blue-300 rounded-sm"></div>
								<div className="h-24 bg-blue-300 rounded-sm"></div>
								<div className="h-24 bg-blue-300 rounded-sm"></div>
							</div>
						</div>
					</div>
					<div className="absolute right-0 top-0 bottom-0 w-1/4 bg-slate-300">
						<div className="animate-pulse flex space-x-4 my-1">
							<div className="flex-1 space-y-6 px-1">
								<div className="h-16 bg-blue-300 rounded-sm"></div>
								<div className="grid grid-cols-3 gap-4">
									<div className="h-20 bg-blue-300 rounded-sm"></div>
									<div className="h-20 bg-blue-300 rounded-sm"></div>
									<div className="h-20 bg-blue-300 rounded-sm"></div>
								</div>
								<div className="h-60 bg-blue-300 rounded-sm"></div>
								<div className="h-60 bg-blue-300 rounded-sm"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center text-white h-screen w-screen">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="animate-pulse h-20 w-20 text-white" viewBox="0 0 16 16">
							<path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
						</svg>
						ກໍາລັງໂຫລດ...
					</div>
				</div>
				<div className="lg:hidden container flex flex-col justify-center items-center text-white space-x-4 bg-blue-500 h-screen w-screen">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="animate-pulse h-24 w-24 mb-2 text-white" viewBox="0 0 16 16">
						<path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
					</svg>
					ກໍາລັງໂຫລດ...
				</div>
			</>
		)
	} else {
		return (
			<div className="App">
				<ProfileComponent />
				<ListView 
					locationArray={locationArray}
					locationOne={locationOne} 
					selectedLocation={selectedLocation} 
					onSelectItem={onSelectLocation} 
					onDeselectItem={onDeselectLocation} />
				<MapView 
					locationArray={locationArray}
					locationOne={locationOne} 
					mapCenter={mapCenter} 
					onSelectMarker={onSelectLocation} />
				{detailsView}
			</div>
		);
	}
}

export default MapComponent;