const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('projects', Project);
