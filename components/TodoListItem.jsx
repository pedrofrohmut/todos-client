import { useState, useEffect } from "react"

const TodoListItem = ({ todo, setTodoAsCompleted, setTodoAsNotCompleted }) => {
  const [completed, setCompleted] = useState(todo.isCompleted)

  useEffect(() => {
    if (completed) {
      setTodoAsCompleted(todo._id)
    } else {
      setTodoAsNotCompleted(todo._id)
    }
  }, [completed])

  return (
  <div className="task">
    <input
      type="checkbox"
      checked={completed}
      onChange={(e) => setCompleted(!completed)}
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
