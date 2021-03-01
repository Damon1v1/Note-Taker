// Establishing dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Assigning express function to object and establishing port number
const app = express();
const PORT = process.env.PORT || 9001;

// parsing data in JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files from the public directory
app.use(express.static('public'));


// Establishing API routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Sets up server to listen on previously established port 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
