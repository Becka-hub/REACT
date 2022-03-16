import React from 'react'
import { Task } from '../Interfaces'
interface Props{
    task:Task;
    DeleteTask(DeleteTask:string):void;
}
const TodoTask = ({ task,DeleteTask}:Props) => {
  return (
    <div className="task">
      <div className="content">
          <span>{task.task}</span>
          <span>{task.deadline}</span>
          </div>
      <button onClick={()=>DeleteTask(task.task)}>X</button>
    </div>
  )
}

export default TodoTask
