const { urlencoded } = require('body-parser');
const express = require ('express');
const mongoose = require ('mongoose')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use(require('./routes'));

 mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')

 mongoose.set('debug', true);

const User = require("./models/user.js")

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));