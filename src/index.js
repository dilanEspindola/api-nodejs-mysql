const express = require('express');
const morgan = require('morgan');
const { pool } = require('./database');

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes 
app.use('/api/users', require('./routes/rutas'));

// server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})