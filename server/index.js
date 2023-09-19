require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');
const { MONGODB_URL, PORT, corsOptions } = require('./constants/constants');

const app = express();

mongoose.connect(MONGODB_URL);

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.listen(PORT);
