import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ name }) => <div>{name}</div>;
const apiKey = process.env.REACT_APP_API_KEY;

const Map = ({ shelters }) => {
  const defaultCenter = {
    lat: 35.681167,
    lng: 139.767052
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={14}
      >
      {shelters.map((shelter) => {
        return (
          <Marker
            key={shelter._id}
            lat={shelter.Latitude}
            lng={shelter.Longitude}
            name={shelter.Shelter_Facility_Name}
          />
        );
      })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;