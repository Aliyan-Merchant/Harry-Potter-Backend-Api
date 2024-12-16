import express from 'express';
import dotenv from 'dotenv';

// Import mock data
import books from './books.js';
import characters from './characters.js';
import houses from './houses.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Home route listing all available paths
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the API!",
        availableRoutes: {
            home: "/",
            books: "/books",
            characters: "/characters",
            houses: "/houses"
        }
    });
});

// Books route
app.get('/books', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "You are logged in",
        data: books
    });
});

// Characters route
app.get('/characters', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "You are logged in",
        data: characters
    });
});

// Houses route
app.get('/houses', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "You are logged in",
        data: houses
    });
});

// Catch-all route for 404 errors
app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
