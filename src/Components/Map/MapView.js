import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { divIcon } from 'leaflet';

const icons = {
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