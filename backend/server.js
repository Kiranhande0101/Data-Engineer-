const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const csvParser = require('csv-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/companyDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Models
const Department = require('./models/department');
const Employee = require('./models/employee');
const Payout = require('./models/payout');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Define your routes for CRUD operations for departments, employees, and payouts here

// Payout Upload
app.post('/api/payout/upload', (req, res) => {
    const csvData = [];

    fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on('data', (row) => {
            csvData.push(row);
        })
        .on('end', () => {
            // Process csvData and save to database
            res.json({ message: 'Payouts uploaded successfully' });
        });
});

// Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
