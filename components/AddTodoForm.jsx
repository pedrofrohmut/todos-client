import { useState } from "react"
import fetch from "isomorphic-unfetch"

const AddTodoForm = ({ getTodosByTaskId, currentTask }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="new-task-creator">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (name === "") return false
          fetch("http://localhost:5000/api/v1/todos", {
            method: "POST",
            headers: {
              "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, task: currentTask._id, description })
          }).then(() => {
            getTodosByTaskId()
            setName("")
          })
        }}
      >
        <input
          type="text"
          className="new task"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="new task name"
          aria-label="new task name"
        />
        <button className="btn create" aria-label="create new task">
          +
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
