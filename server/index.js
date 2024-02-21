const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 3000;
require('dotenv').config();
const Release = require("./models/release");


const API_KEY = process.env.DISCOGS_KEY;
const API_SECRET = process.env.DISCOGS_SECRET;
const mongoose = require('mongoose');

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Enable CORS for all requests
app.use(cors());

// Endpoint for searching the Discogs database for releases
app.get('/search/releases', async (req, res) => {
    // Extract query parameters from the request query string
    const searchParams = req.query;
    try {
        // Make a GET request to the Discogs API search endpoint, specifying 'release' as the type
        const response = await axios.get('https://api.discogs.com/database/search', {
            params: {
                key: API_KEY,
                secret: API_SECRET,
                type: 'release', // Specify that we only want releases
                ...searchParams // Spread the additional search parameters into the request
            }
        });
        /*
        if (response.data || response.data.results) {
            const releases = response.data.results.map(item => ({
                title: item.title,
                artist: item.artist, // Adjust based on the actual structure
                year: item.year,
                genre: item.genre,
                style: item.style,
                format: item.format,
                label: item.label,
                country: item.country,
                barcode: item.barcode,
                cover_image: item.cover_image,
            }));

            // Save each release to the database
            // This is a bulk operation, but you could also do them one by one if necessary
            const savedReleases = await Release.insertMany(releases);
            
            //send the saved releases back as the response
            res.json(savedReleases);
        } else {
            res.status(404).json({ message: 'No releases found' });
        }*/
        res.json(response.data); // Send back the response data
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Discogs', error: error.response.data });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
