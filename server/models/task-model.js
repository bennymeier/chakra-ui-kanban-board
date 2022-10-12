const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    projectID: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    index: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('tasks', Task);
