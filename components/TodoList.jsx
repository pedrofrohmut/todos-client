import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, setTodoAsCompleted, setTodoAsNotCompleted }) => (
  <div className="tasks">
    {!todos && <p>No TODOs for this Task</p>}

    {todos &&
      todos.length > 0 &&
      todos.map((todo) => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          setTodoAsCompleted={setTodoAsCompleted}
          setTodoAsNotCompleted={setTodoAsNotCompleted}
        />
      ))}
  </div>
)

export default TodoList
