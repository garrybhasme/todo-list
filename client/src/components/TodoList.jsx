import TodoItem from './TodoItem';
import { useTodo } from '../contexts/TodoContexts';

function TodoList() {
  const {tasks, loading, error}=useTodo();
  if(loading) return <p>Loading tasks...</p>
  if(error) return <p>{error}</p>
  if(tasks.length===0) return<p>No Tasks yet! Add the Task</p>
  return (
    tasks.map(task=>{
      return <TodoItem key={task._id} task={task}/>
    })
  )
}

export default TodoList