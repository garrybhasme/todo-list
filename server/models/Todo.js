const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tasksSchema=new Schema({
  text:{
    type: String,
    required: true
  },
  isCompleted:{
    type: Boolean,
    default: false
  },
  isEditable:{
    type: Boolean,
    default: true
  }
},{timestamps: true}
)

module.exports=mongoose.model("Tasks", tasksSchema)