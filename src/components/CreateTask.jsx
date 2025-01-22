import React, { useState } from 'react'

function CreateTask({ addTask }) {
  const [taskValue, setTaskValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskValue.trim()) {
      addTask({ id: Math.floor(Math.random() * 10000), taskValue: taskValue })
      setTaskValue('')
    }
  }

  const handleInputChange = (e) => {
    setTaskValue(e.target.value)
  }

  return (
    <div className="w-100">
      <div class="input-group mb-3 p-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={taskValue}
          onChange={handleInputChange}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default CreateTask
