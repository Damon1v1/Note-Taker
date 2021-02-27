// Establishing dependencies
const express = require('express');
const router = express.Router()
const path = require('path');
const store = require('db/store')

// Assigning express function to object and establishing port number
const app = express();
const PORT = 3001;

// parsing data in JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Establishing our HTML routes for different pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// Serves static files from the public directory
app.use(express.static('public'));


// Establishing API routes
router.get('/notes', (req, res) => {
    store
        .getNotes()
})

// Sets up server to listen on previously established port 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
