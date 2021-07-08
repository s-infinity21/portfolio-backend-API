require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

/*app.get('/', (req, res) => {
	res.send('Hello from Server');
});*/

//Routes
app.use('/', require('./routes/allRoutes'));

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server loaded on Port ${PORT}`);
});
