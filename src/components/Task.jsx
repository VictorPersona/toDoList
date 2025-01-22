import React, { useState } from 'react'

function Task({ task, deleteTask, editTask }) {
  const [editedTaskValue, setEditedTaskValue] = useState(task.taskValue)
  const [editState, setEditState] = useState(false)
  const handleOnChange = (e) => {
    setEditedTaskValue(e.target.value)
  }

  const handleOnDelete = () => {
    deleteTask(task)
  }
  const handleOnEdit = () => {
    const editedTask = { id: task.id, taskValue: editedTaskValue }
    editTask(editedTask)
  }
  return (
    <div className="container d-flex">
      {!editState ? (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setEditState(true)
          }}
        >
          Edit
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setEditState(false)
            handleOnEdit()
          }}
        >
          Ok
        </button>
      )}
      {!editState ? (
        <div className="container-md border border-success rounded">
          {task.taskValue}
        </div>
      ) : (
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={editedTaskValue}
          onChange={handleOnChange}
        />
      )}
      <button type="button" className="btn btn-danger" onClick={handleOnDelete}>
        Delete
      </button>
    </div>
  )
}

export default Task
