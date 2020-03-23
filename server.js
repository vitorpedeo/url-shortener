const express = require('express');
const app = express();
const routes = require('./routes/index');
const mongoose = require('mongoose');

require('dotenv').config();

try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to Mongo...');
} catch {
    console.log('Error');
}

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => console.log(`Server online on ${port}`));