import React, { useState } from 'react'
import {TodoInput, TodoList} from '../components'

function HomePage() {
  const [tasks,setTasks]=useState([]);
  return (
    <div className='m-2 p-2 flex flex-col justify-center items-center w-full h-screen'>
      <h1 className='text-md md:text-2xl lg:text-5xl text-slate-600 text-wrap m-5'>Welcome to the TODO app enter your tasks Below</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default HomePage