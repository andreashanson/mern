const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js');

// Connect to mongo
const mongoURI = `mongodb+srv://${db.db_user}:${db.db_password}@${db.db_host}`;

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));

