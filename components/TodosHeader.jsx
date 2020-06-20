const TodosHeader = ({ currentTask, todos }) => (
  <>
    {currentTask && (
      <div className="todo-header">
        <h2 className="list-title">{currentTask.name}</h2>
        <p className="task-count">
          {!todos ? "0" : todos.length} tasks remaining
        </p>
      </div>
    )}
  </>
)

export default TodosHeader
