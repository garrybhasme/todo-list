const Tasks=require("../models/Todo")

// getAllTasks()-> Get the all tasks from database
exports.getAllTasks = async(req, res)=>{
  try{
    const data=await Tasks.find();
    if(data.length===0){
      return res.status(200).json({
        success: true,
        message: "No Tasks in system"
      })
    }
    return res.status(200).json({
      success: true,
      data: data
    })
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
    })
  }
}

// createNewtask(task)-> Add the new task in database
exports.createNewtask = async(req, res)=>{
  try{
    const {text}=req.body;
    if(!text || text.trim() === ''){
      return res.status(400).json({
        success: false,
        message:"Bad Request: Please provide the data to add a new task"
      })
    }
    const newTask= await Tasks.create({text});
    return res.status(201).json({
      success: true,
      message: "New task is added successfully.",
      data: newTask
    });
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
    })
  }
}

// deleteTask(id)-> Delete the task by id
exports.deleteTask=async(req, res)=>{
  try{
    const {id}=req.params;
    const deletedTask = await Tasks.findByIdAndDelete(id);
    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            message: `Task Not Found for id: ${id}`
        })
    }
    return res.status(200).json({
      success: true,
      message: "Task is deleted successfully"
    })
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
    })
  }
}

// toggleTask(id)-> Complete the task by id
exports.toggleTask=async(req, res)=>{
  try{
    const {id}=req.params;
    const task = await Tasks.findById(id);
    if(!task){
      return res.status(404).json({
        success: false,
        message: `Not Found for id: ${id}`
      })
    }
    const toggledValue = !task.isCompleted;
    const updatedTask=await Tasks.findByIdAndUpdate(id, {isCompleted:toggledValue, isEditable: !toggledValue}, {new: true});
    return res.status(200).json({
      success: true,
      message: `Task is marked as: ${toggledValue?'complete':'incomplete'} and ${toggledValue?'non-editable':'editable'}`,
      data: updatedTask
    })
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
    })
  }
}

// updateTask(id,text)-> Edit the task's text by id
exports.updateTask=async (req, res)=>{
  try{
    const {id}=req.params;
    const {text}=req.body;
    if(!text || text.trim()===''){
      return res.status(400).json({
          success: false,
          message: "Text field is required"
      })
    }
    const task=await Tasks.findById(id);
    if(!task){
      return res.status(404).json({
        success: false,
        message: `Not Found for id: ${id}`
      })
    }
    if(task.isEditable){
      const updatedTask=await Tasks.findByIdAndUpdate(id, {text}, {new:true});
      return res.status(200).json({
        success: true,
        message: `Text of the task of id:${id} is updated`,
        data: updatedTask
      })
    }
    else{
      return res.status(400).json({
        success: false,
        message: `Task for id: ${id} is completed and non-editable. Toggle it to incomplete to edit!`
      })
    }
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
    })
  }
}