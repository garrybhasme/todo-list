import { useContext, useState, createContext, useEffect } from "react";
import {getAllTasks, createNewtask, toggleTask, updateTask, deleteTask} from '../services/api'

// Create the Context
const TodoContext=createContext();
// Create todoProvider
export function TodoProvider({children}){
  // Create states
  const [tasks, setTasks]=useState([]);
  const [loading, setLoading]=useState(false);
  const [error, setError] = useState(null)

  // Fetch all data from backend
  const fetchAllTasks =async ()=>{
    setLoading(true);
    try{
      const response=await getAllTasks();
      setTasks(response.data.data || []);
    }
    catch(err){
      setError("Failed to fetch tasks!");
    }
    finally{
      setLoading(false);
    }
  }

  //Add new tasks
  const addTask= async(text)=>{
    try{
      const response=await createNewtask(text);
      setTasks(prev=>[...prev, response.data.data])
    }
    catch(err){
      setError("Failed to add task!");
    }
  }

  //Complete the task
  const toggleComplete=async(id)=>{
    try{
      const response=await toggleTask(id);
      setTasks(prev=>prev.map(task=>
        task._id===id?response.data.data:task
      ));
    }
    catch(err){
      setError("Failed to toggle complete task!");
    }
  }

  //Update the task
  const editTask=async (id, text)=>{
    try{
      const response=await updateTask(id, text);
      setTasks(prev=> prev.map(task=>
        task._id===id?response.data.data:task
      ));
    }
    catch(err){
      setError("Failed to update text!");
    }
  }

  //Delete the task
  const removeTask=async (id)=>{
    try{
      await deleteTask(id);
      setTasks(prev=>prev.filter(task=>task._id!==id));
    }
    catch(err){
      setError("Failed to delete task!");
    }
  }

  //useEffect
  useEffect(() => {
    fetchAllTasks();
  }, []);

  return(
    <TodoContext.Provider value={{
      tasks,
      loading,
      error,
      addTask,
      toggleComplete,
      editTask,
      removeTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}

//custom hook  for easy access
export const useTodo = () => useContext(TodoContext);