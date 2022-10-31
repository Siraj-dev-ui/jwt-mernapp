const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectdb = require('./config/db');
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
const { application } = require('express');
const PORT = process.env.PORT;

connectdb();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
