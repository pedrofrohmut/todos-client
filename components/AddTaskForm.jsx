import { useState } from "react"
import fetch from "isomorphic-unfetch"

const AddTaskForm = ({ getTasks }) => {
  const [name, setName] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (name === "") return false
        fetch("http://localhost:5000/api/v1/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify({ name })
        }).then(() => {
          getTasks()
          setName("")
        })
      }}
    >
      <input
        type="text"
        className="new list"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="new list name"
        aria-label="new list name"
      />
      <button className="btn create" aria-label="create new list">
        +
      </button>
    </form>
  )
}

export default AddTaskForm
