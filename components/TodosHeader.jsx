const TodosHeader = ({ currentTask, todos }) => {
  const incompletedTodoCount = todos
    ? todos.reduce((acc, curr) => (acc += curr.isCompleted ? 0 : 1), 0)
    : 0

  return (
    <>
      {currentTask && (
        <div className="todo-header">
          <h2 className="list-title">{currentTask.name}</h2>
          <p className="task-count">
            {!todos ? "0" : incompletedTodoCount}
            {" tasks remaining"}
          </p>
        </div>
      )}
    </>
  )
}

export default TodosHeader
