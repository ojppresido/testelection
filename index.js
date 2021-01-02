
const compression = require('compression');
const helmet = require('helmet');
const winston = require('winston');
// const error =  require('./middleware/error');
const mongoose = require('mongoose');
const staffs = require('./route/staffs');
const authent = require('./route/authent');
const express = require('express');
const app = express();





mongoose.connect('mongodb://localhost/sagSTAFF')
.then(()=>console.log(`Connected To to database`))
.catch(err=>console.error('Could not connect', err));


app.use(helmet());
app.use(compression());
app.use('/staff', staffs);
app.use('/authent', authent);
// app.use(error);







app.listen(3000, ()=>console.log('Connected to Postman'));
