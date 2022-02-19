'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pkg = require('../package.json');

const principalRoute = require('./routes/principal.js');

const PORT = 8080;

// App
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.set('pkg', pkg);

app.get('/', (req, res)=>{
    res.json({
        name: app.get('pkg').name,
        author : app.get('pkg').author,
        description : app.get('pkg').description,
        version: app.get('pkg').version,
        message: 'Hola!'
    });
} );

app.use('/api',principalRoute);

app.get("*",(req,res)=>{
  res.status(404).json({404:"estás perdido"});
});

app.listen(PORT, ()=>{
  console.log(`Running Server on port ${PORT}`);
});
