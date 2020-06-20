const TodoListItem = ({ todo }) => (
  <div className="task">
    <input type="checkbox" id={`task-${todo._id}`} />
    <label htmlFor={`task-${todo._id}`}>
      <span className="custom-checkbox"></span>
      {todo.name}
    </label>
  </div>
)

export default TodoListItem
