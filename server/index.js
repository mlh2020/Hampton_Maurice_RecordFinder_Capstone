const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
require('dotenv').config();

const API_KEY = process.env.DISCOGS_KEY;
const API_SECRET = process.env.DISCOGS_SECRET;

// Endpoint for searching the Discogs database
app.get('/search', async (req, res) => {
    // Extract query parameters from the request query string
    const searchParams = req.query;
    try {
        // Make a GET request to the Discogs API search endpoint
        const response = await axios.get('https://api.discogs.com/database/search', {
            params: {
                key: API_KEY,
                secret: API_SECRET,
                ...searchParams // Spread the search parameters into the request
            }
        });
        res.json(response.data); // Send back the response data
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Discogs', error: error.response.data });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
