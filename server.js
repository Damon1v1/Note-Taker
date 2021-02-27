// Establishing dependencies
const express = require('express');
const path = require('path');

// Assigning express function to object and establishing port number
const app = express();
const PORT = 3001;


// Establishing our routes for different pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// Sets up server to listen on previously established port 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
