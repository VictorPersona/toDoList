import React from 'react'
import Task from './Task'

function TaskContainer({ tasks, setTasks }) {
  const deleteTask = (callingTask) => {
    const updatedTasks = tasks.filter((task) => task.id != callingTask.id)
    setTasks(updatedTasks)
  }
  const editTask = (callingTask) => {
    const tId = callingTask.id
    const updatedTasks = tasks.map((task) => {
      if (task.id == tId) {
        return { ...task, taskValue: callingTask.taskValue }
      }
      return task
    })
    setTasks(updatedTasks)
  }
  return (
    <div>
      <div class="container">
        <h2>Tasks</h2>
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TaskContainer
