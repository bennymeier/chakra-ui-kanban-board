const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://benny:oxJb5WM3TsNu9JqK@cluster0.e92mlls.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
