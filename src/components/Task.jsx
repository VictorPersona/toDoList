import React from 'react'

function Task({ task, deleteTask, editTask }) {
  const [editState, setEditState] = useState(false)
  const handleOnDelete = () => {
    deleteTask(task)
  }
  const handleOnEdit = () => {
    editTask()
  }
  return (
    <div className="container d-flex">
      {editState == false ? (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setEditState(true)
          }}
        >
          Edit
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setEditState(false)
          }}
        >
          Ok
        </button>
      )}
      {editState == false ? (
        <div class="container-md border border-success rounded">
          {task.taskValue}
        </div>
      ) : (
        <input
          type="text"
          class="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={task.taskValue}
          onChange={handleOnChange}
        />
      )}
      <button type="button" class="btn btn-danger" onClick={handleOnDelete}>
        Delete
      </button>
    </div>
  )
}

export default Task
