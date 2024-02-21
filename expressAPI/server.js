// Project for serverside scripting H5

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'PROD';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require(__dirname + '/middleware/logger');

const app = express();

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.get('/home', (req, res) => {
    res.render('home', { title: 'Home', message: 'Welcome to the home page' });
    });
app.get('/about', (req, res) => {
    res.render('about', { title: 'About', message: 'Welcome to the about page' });
    });
const factionRoutes = require('./routes/Faction_route');
app.use('/api', factionRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// url to create faction - http://localhost:3003/api/faction

// Connect to MongoDB
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/expressAPIDB', {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB');
        console.log(error);
        process.exit(1);
    }
};
connectToDB();

// Add server listener to port 3003
app.listen(PORT, () => {
  console.log(`Server started in ${NODE_ENV} mode on port ${PORT} : http://localhost:${PORT}`);
});
