import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { divIcon } from 'leaflet';

/*
1. 1-100 => pink, super very small
2. 101-500 => pink, very small
3. 501-1000 => pink, small
4. 1001-5000 => purple, normal
5. 5001-10000 => purple, big
6. 10001-50000 => red, very big
7. 50000 up => red, super very big
*/
const icons = {
    // xxSmall: divIcon({className: 'marker-icon pink', iconSize: [12, 12]}),
    // xSmall: divIcon({className: 'marker-icon pink', iconSize: [16, 16]}),
    // small: divIcon({className: 'marker-icon pink', iconSize: [24, 24]}),
    // normal: divIcon({className: 'marker-icon purple', iconSize: [32, 32]}),
	// large: divIcon({className: 'marker-icon purple', iconSize: [48, 48]}),
	// xLarge: divIcon({className: 'marker-icon red', iconSize: [72, 72]}),
	xxLarge: divIcon({className: 'border border-solid rounded-full bg-rose-300/50 border-rose-500', iconSize: [96, 96]})
};

function MapView(props) {
    const { locationArray, mapCenter, onSelectMarker } = props;

    const markerElements = locationArray.map(location => {
        const {
            id, name,
            coordinates: { latitude, longitude },
        } = location;

        let markerIcon = icons.xxLarge;
        // if (confirmed >= 101 && confirmed <= 500) {
        //     markerIcon = icons.xSmall;
        // }
        // else if (confirmed >= 501 && confirmed <= 1000) {
        //     markerIcon = icons.small;
        // }
        // else if (confirmed >= 1001 && confirmed <= 5000) {
        //     markerIcon = icons.normal;
        // }
        // else if (confirmed >= 5001 && confirmed <= 10000) {
        //     markerIcon = icons.large;
        // }
        // else if (confirmed >= 10001 && confirmed <= 50000) {
        //     markerIcon = icons.xLarge;
        // }
        // else if (confirmed >= 50001) {
        //     markerIcon = icons.xxLarge;
        // }

        let title = name;
        // if (province !== '' && province !== country) {
        //     title = `${province}, ${country}`;
        // }

        // let MarkerClass = 'marker-icon';
        // if (onSelectMarker !== null) {
        //     if (location.id === onSelectMarker.id) {
        //         MarkerClass += ' selected';
        //     }
        // }

        return (
            <Marker 
                key={`${id}-${name}`} 
                position={[latitude, longitude]}
                icon={markerIcon} 
                eventHandlers={{click: () => onSelectMarker(id)}} >
                <Popup>{title}</Popup>
            </Marker>
        );
    });

    return (
        <MapContainer className="w-screen h-screen z-10" center={mapCenter} zoom={14}>
            <ZoomControl position="topright" />
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerElements}
        </MapContainer>
    );
}

export default MapView;
