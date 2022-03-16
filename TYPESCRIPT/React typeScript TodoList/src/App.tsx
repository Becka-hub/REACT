import React, { ChangeEvent, FC, useState, useEffect } from 'react'
import { Task } from './Interfaces'
import './App.css'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(1)
  const [todo, setTodo] = useState<Task[]>([])

  const handlechange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value)
    } else {
      // setDeadline(parseInt(e.target.value))
      setDeadline(Number(e.target.value))
    }
  }

  const addTask = (): void => {
    // const newTask = { task: task, deadline: deadline }
    // setTodo([...todo, newTask]);
    if (deadline < 1) {
      alert('Le nombre ne doit pas etre nulle')
    } else {
      setTodo([...todo, { task: task, deadline: deadline }])
      setTask('')
      setDeadline(0)
    }
  }

  const DeleteTask = (taskName: string): void => {
    const newTask = todo.filter((todo) => todo.task !== taskName)
    setTodo(newTask)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handlechange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handlechange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} DeleteTask={DeleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
