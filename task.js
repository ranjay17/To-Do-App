//requiring the mongoose
const mongoose = require('mongoose');

//creating the schema
const taskSchema = new mongoose.Schema({
  task:{
    type: String,
    required: true
  }
});
const Task = mongoose.model('Task', taskSchema);

//exporting the schema
module.exports = Task