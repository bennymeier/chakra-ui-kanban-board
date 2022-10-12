const express = require('express');
const cors = require('cors');
const db = require('./db');
const projectRouter = require('./routes/project-router');
const taskRouter = require('./routes/task-router');
const app = express();
const apiPort = 1400;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', [projectRouter, taskRouter]);

app.listen(apiPort, function (err) {
  if (err) console.log(err);
  console.log('Server listening on port: ', apiPort);
});
