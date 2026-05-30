import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContexts'

function TodoInput() {
  const {addTask}=useTodo();
  const [text, setText]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
      <form onSubmit={handleSubmit} className='w-full flex justify-around items-center gap-10 py-10 px-30 bg-gray-200 rounded-2xl text-2xl'>   
          <label htmlFor="addTask" className=''>Task: </label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} name="addTask" id="addTask" placeholder='Enter Your Task' className='border rounded-md h-15 w-full px-2'/>
          <button type="submit" className='bg-gray-400 hover:bg-gray-600 hover:cursor-pointer text-slate-50 rounded-2xl p-2'>Add Task</button>
      </form>
  )
}

export default TodoInput