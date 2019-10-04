//  Dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

//  App
const app = express();

//  Settings
app.set('port', process.env.PORT || 3000);

//  Middleware
app.use(morgan('dev'));
app.use(express.json());

//  Statics Files
app.use(express.static(path.join(__dirname, '../docs')));

app.get('/', (req, res, nex) => {
  fs.readFile(path.join(__dirname, '../docs/index.html'), null, (error, data) => {
    if (error) return res.status(200).send('File not fount');
    return res.status(200).write(data).end()
  });
});

app.listen(app.get('port'), () => {
  console.log(`Sever On Port ${app.get('port')}`);
});
