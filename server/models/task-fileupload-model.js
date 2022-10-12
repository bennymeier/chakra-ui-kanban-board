const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskFileupload = new Schema(
  {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    taskID: { type: Schema.Types.ObjectId, ref: 'tasks', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('taskfiles', TaskFileupload);
