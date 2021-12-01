
require('dotenv').config();

const express= require('express');
const app= express();
const mongoose= require('mongoose');
const cors = require('cors');

app.use(cors())

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

const db= mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to database'));

// require('./seeds/seed.js');

app.use(express.json());

//Auth routes

 const authRoutes= require('./routes/auth');
 app.use('/api/auth', authRoutes);

const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log('Serving...'));