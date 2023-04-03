const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Shelters = require('/src/models/Shelter');

mongoose.connect('mongodb://127.0.0.1/shelter_mapper', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

// CORS 設定
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
});

app.get('/api/shelters', (req, res) => {
  Shelters.find()
    .then(shelters => res.json(shelters))
    .catch(error => console.log(error));
});

const port = process.env.PORT || 54941;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});