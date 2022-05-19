import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { divIcon } from 'leaflet';

const icons = {
    // xxSmall: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [12, 12]}),
    // xSmall: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [16, 16]}),
    // small: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [24, 24]}),
    // normal: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [32, 32]}),
	// large: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [48, 48]}),
	// xLarge: divIcon({className: 'border border-solid rounded-full bg-blue-300/10 border-blue-500', iconSize: [72, 72]}),
	xxLarge: divIcon({className: 
        'border-2 border-solid rounded-full bg-blue-300/60 border-blue-500',
         iconSize: [96, 96]})
};

function MapView(props) {
    const { locationOne, mapCenter, onSelectMarker } = props;
 
    const markerElements = locationOne.map(location => {
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

        // let title = name;
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
                <Popup>{name}</Popup>
            </Marker>
        );
    });

    return (
        <MapContainer className="w-screen h-screen z-10" center={mapCenter} zoom={14} zoomControl={false}>
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
