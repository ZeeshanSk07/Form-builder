const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const Port = 4000;

app.use(bodyParser.json());

app.use('/user', user);
app.get('/health', (req, res) => {
    res.json({
        message: 'Job listing API is working fine',
        status: 'Working',
        date: new Date().toLocaleDateString()
    });
})

mongoose.connect('mongodb+srv://zeeshansk:zeeshansk@job-listing-db.rhynxiz.mongodb.net/?retryWrites=true&w=majority&appName=job-listing-db')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error connecting to database:', err);
    });

app.use("*", (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        status: 'Error',
    });
});
  
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});