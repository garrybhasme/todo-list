import React, { useState } from 'react'
import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/delete.png'
import saveIcon from '../assets/save.png'
import { useTodo } from '../contexts/TodoContexts';
function TodoItem({task}) {
  const [isEditing, setIsEditing]=useState(false);
  const [editText, setEditText]=useState(task.text);
  const {toggleComplete, editTask, removeTask}=useTodo();
  const handleSave= async()=>{
    if(editText.trim()==='') return;
    await editTask(task._id, editText);
    setIsEditing(false);
  }

  return (
    <div className='flex gap-2 px-30 py-5 m-1 justify-around items-center w-full h-20 bg-gray-300 rounded-2xl'>
      <input type="checkbox" name="complete" id="complete" onChange={() => toggleComplete(task._id)}  checked={task.isCompleted}/>
      {isEditing?
        (<input type='text' className='w-full border h-8 px-5' value={editText} onChange={(e)=>setEditText(e.target.value)}/>):
        (<span className='w-full bg-gray-200 text-2xl rounded-md px-2 mx-5'><p className={task.isCompleted? 'line-through text-gray-400':""}>{task.text}</p></span>)
      }
      <div className='flex gap-2'>
        {!task.isCompleted && (isEditing?
          (<img className='size-7 mx-1 hover:cursor-pointer' onClick={handleSave} src={saveIcon} alt="Save" />):
          (<img className='size-7 mx-1 hover:cursor-pointer' onClick={()=>setIsEditing(true)} src={editIcon} alt="Edit" />)
        )}
        <img className='size-7 mx-1 hover:cursor-pointer' onClick={()=>removeTask(task._id)} src={deleteIcon} alt="Delete" />
      </div>
    </div>
  )
}

export default TodoItem