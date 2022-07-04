import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { divIcon } from 'leaflet';
import axios from 'axios';

const icons = {
	OnlineIcon: divIcon({className: 
        'onlineStatus animate-pulse duration-300 border-2 border-solid rounded-full bg-blue-300/60 border-blue-500 after:absolute after:bg-blue-500 after:rounded-full after:animate-ping after:w-full after:h-full',
         iconSize: [96, 96]}),
    OfflineIcon: divIcon({className: 
        'offlineStatus animate-pulse duration-300 border-2 border-solid rounded-full bg-red-300/60 border-red-500 after:absolute after:bg-red-500 after:rounded-full after:animate-ping after:w-full after:h-full',
         iconSize: [96, 96]}),
};

let markerIcon;

function MapView(props) {
    const { locationOne, mapCenter, onSelectMarker } = props;

    const [status, setStatus] = React.useState([]);
    // console.log(status);

    const getStatus = async () => {
        try {
            const resp = await axios.get('https://ceit-iot-api.herokuapp.com/api/station/1/filter/1');
            setStatus(resp.data.station_status[0].status);
        } catch (error) {
            console.log(error)
        }
    };

    React.useEffect(() => {
      getStatus();
    
        const interval = setInterval(() => {
          getStatus();
        }, 180000);
    
        return () => clearInterval(interval);
    }, []);

    if (status === "Online") {
        markerIcon = icons.OnlineIcon;
    } else {
        markerIcon = icons.OfflineIcon;
    }

    const markerElements = locationOne.map(location => {
        const {
            id, name,
            coordinates: { latitude, longitude },
        } = location;

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