import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"

import TaskList from "../components/TaskList"
import AddTaskForm from "../components/AddTaskForm"
import TodosHeader from "../components/TodosHeader"
import TodoList from "../components/TodoList"
import AddTodoForm from "../components/AddTodoForm"
import DeleteButtons from "../components/DeleteButtons"

import Head from "next/head"

const IndexPage = () => {
  const [tasks, setTasks] = useState([])
  const [todos, setTodos] = useState([])
  const [activeItem, setActiveItem] = useState(undefined)
  const [currentTask, setCurrentTask] = useState(undefined)

  const getTasks = () => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.data))
      .catch((err) => console.log(err))
  }

  const getTaskById = () => {
    fetch(`http://localhost:5000/api/v1/tasks/${activeItem}`)
      .then((res) => res.json())
      .then((json) => setCurrentTask(json.data))
      .catch((err) => console.log(err))
  }

  const getTodosByTaskId = () => {
    fetch(`http://localhost:5000/api/v1/todos/task/${activeItem}`)
      .then((res) => res.json())
      .then((json) => setTodos(json.data))
      .catch((err) => console.log(err))
  }

  // Get Task List on Page Load
  useEffect(() => getTasks(), [])

  // Get Todo List on Change or Set of an Active List Item
  useEffect(() => {
    if (activeItem) {
      getTodosByTaskId()
      getTaskById()
    }
  }, [activeItem])

  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <h1 className="title">Stuff i need to do</h1>

      {/* Task Lists */}
      <div className="all-tasks">
        <h2 className="task-list-title">Tasks</h2>
        <TaskList
          tasks={tasks}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <AddTaskForm getTasks={getTasks} />
      </div>

      {/* Task Items - TODOs */}
      {activeItem && (
        <>
          <div className="todo-list">
            <TodosHeader currentTask={currentTask} todos={todos} />
            <div className="todo-body">
              <TodoList todos={todos} />
              <AddTodoForm
                currentTask={currentTask}
                getTodosByTaskId={getTodosByTaskId}
              />
            </div>
          </div>
          <DeleteButtons currentTask={currentTask} todos={todos} />
        </>
      )}
    </>
  )
}

export default IndexPage
