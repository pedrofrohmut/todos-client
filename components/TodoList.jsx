import TodoListItem from "./TodoListItem"

const TodoList = ({ todos }) => (
  <div className="tasks">
    {!todos && (
      <p>No TODOs for this Task</p>
    )}

    {todos && todos.length > 0 && (
      todos.map(todo => (
        <TodoListItem key={todo._id} todo={todo} />
      ))
    )}
  </div>
)

export default TodoList
