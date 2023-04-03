const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  Local_Government_Code: {
    type: String,
    required: true
  },
  Shelter_Facility_Name: {
    type: String,
    required: true
  },
  Prefecture: {
    type: String,
    required: true
  },
  Designated_City_Ward_Town: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Latitude: {
    type: Number,
    required: true
  },
  Longitude: {
    type: Number,
    required: true
  },
  Elevator_Availability_or_Refuge_Area_on_1st_Floor: {
    type: String,
    required: true
  },
  Slope_Accessibility: {
    type: String,
    required: true
  },
  Braille_Blocks: {
    type: String,
    required: true
  },
  Anyone_Toilet: {
    type: String,
    required: true
  },
  Other: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Shelter', shelterSchema);
