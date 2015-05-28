var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  completed: {type:Boolean, 'default': false},
  description: String,
  updated_at: {type: Date, "default": Date.now}
});

// export to my node app!
module.exports = mongoose.model("Task", TaskSchema);
