const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profiles');
var cors = require('cors')

const app = express();

mongoose.connect('mongodb://localhost:27017/Profiles');

app.use(express.json());
app.use(cors());

app.use('/profiles', profileRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ err });
});

app.listen(8000, () => {
    console.log(`Connection Succeeded and Run !!!`);
});