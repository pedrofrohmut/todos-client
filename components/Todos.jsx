const Todos = () => {
  return (
    <div className="todo-list">
      <div className="todo-header">
        <h2 className="list-title">Youtube</h2>
        <p className="task-count">3 tasks remaining</p>
      </div>

      <div className="todo-body">
        <div className="tasks">
          {/* Task 1 */}
          <div className="task">
            <input type="checkbox" id="task-1" />
            <label htmlFor="task-1">
              <span className="custom-checkbox"></span>
              record todo list video
            </label>
          </div>

          {/* Task 2 */}
          <div className="task">
            <input type="checkbox" id="task-2" />
            <label htmlFor="task-2">
              <span className="custom-checkbox"></span>
              edit todo list video
            </label>
          </div>

          {/* Task 3 */}
          <div className="task">
            <input type="checkbox" id="task-3" />
            <label htmlFor="task-3">
              <span className="custom-checkbox"></span>
              publish todo list video
            </label>
          </div>
        </div>

        <div className="new-task-creator">
          <form action="">
            <input
              type="text"
              className="new task"
              placeholder="new task name"
              aria-label="new task name"
            />
            <button className="btn create" aria-label="create new task">
              +
            </button>
          </form>
        </div>

        <div className="delete-stuff">
          <button className="btn delete">Clear completed task</button>
          <button className="btn delete">Delete List</button>
        </div>
      </div>
    </div>
  )
}

export default Todos
