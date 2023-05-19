const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const app = express();
const bodyparser = require('body-parser');

const postsRoute = require('./routes/posts');

app.use(cors());
app.use(bodyparser.json());

app.use('/posts', postsRoute);

app.get('/', (req,res) => {
 res.send('we are on home');
})

app.get('/posts', (req,res) => {
 res.send('we are on posts');
})


mongoose.connect(process.env.DB_CONNECTION)

app.listen(3000, () => {
 console.log('Server is running')
})