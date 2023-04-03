import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '../components/map/Map';

const MapPage = () => {
  const [shelters, setShelters] = useState([]);
  
  useEffect(() => {
    const fetchShelters = async () => {
      const { data } = await axios.get('/api/shelters');
      setShelters(data);
    };

    fetchShelters();
  }, []);

  return (
    <div>
      <h1>Map Page</h1>
      <Map shelters={shelters} />
    </div>
  );
};

export default MapPage;