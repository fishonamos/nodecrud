const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Import Routes
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.listen(3000, () => console.log('Server Started'));