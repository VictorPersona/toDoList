import React, { useState } from 'react'
import CreateTask from './components/CreateTask'
import TaskContainer from './components/TaskContainer'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks((prevTaskArray) => [...prevTaskArray, newTask])
  }

  return (
    <div>
      <h1 class="text-center text-primary-emphasis">To Do List</h1>
      <div class="container d-flex w-50 flex-column align-items-center  mx-auto  ">
        <CreateTask addTask={addTask} />
        <TaskContainer tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}
export default App
