import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"

import TaskList from "./TaskList"
import AddTaskForm from "./AddTaskForm"

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="all-tasks">
      <pre>{JSON.stringify(tasks, null, 4)}</pre>
      <h2 className="task-list-title">My Lists</h2>
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </div>
  )
}

export default Tasks
