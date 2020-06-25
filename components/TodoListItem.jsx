import { useState, useEffect } from "react"

const TodoListItem = ({ todo, setTodoAsCompleted, setTodoAsNotCompleted }) => {
  const [completed, setCompleted] = useState(todo.isCompleted)
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          setCompleted(!completed)
          // Reverse logic because useState is not working here, Sync problem
          if (!completed) {
            setTodoAsCompleted(todo._id)
          } else {
            setTodoAsNotCompleted(todo._id)
          }
        }}
        id={`task-${todo._id}`}
      />
      <label htmlFor={`task-${todo._id}`}>
        <span className="custom-checkbox"></span>
        {todo.name}
      </label>
    </div>
  )
}

export default TodoListItem
