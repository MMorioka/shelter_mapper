import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '../map/Map';

function AllShelters() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    axios.get('/api/shelters')
      .then(response => setShelters(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Map />
      {shelters.map(shelter => <p key={shelter._id}>{shelter.name}</p>)}
    </div>
  );
}

export default AllShelters;