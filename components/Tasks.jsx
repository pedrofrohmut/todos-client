import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"

import TaskList from "./TaskList"
import AddTaskForm from "./AddTaskForm"

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [activeItem, setActiveItem] = useState(undefined)
  const [todos, setTodos] = useState([])

  const getTasks = () => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.data))
      .catch((err) => console.log(err))
  }

  // Get Task List on Page Load
  useEffect(() => getTasks(), [])

  // Get Todo List on Active List Item Change or Set
  useEffect(() => {
    if (activeItem) {
      fetch(`http://localhost:5000/api/v1/todos/task/${activeItem}`)
        .then((res) => res.json())
        .then((json) => setTodos(json.data))
        .catch((err) => console.log(err))
    }
  }, [activeItem])

  return (
    <div className="all-tasks">
      <h2 className="task-list-title">My Lists</h2>
      <TaskList
        tasks={tasks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <AddTaskForm getTasks={getTasks} />
    </div>
  )
}

export default Tasks
