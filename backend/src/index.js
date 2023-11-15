const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');

const app = express();
mongoose.connect(process.env.MONGODB_URI);

let corsSettings = {
	origin: 'http://localhost:3838',
};

app.use(cors(corsSettings));
app.use(express.json());
app.use(routes);

app.listen(7878, () => {
	console.log('🏃‍♂️ on port 7878');
});
