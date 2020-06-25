const DeleteButtons = ({
  currentTask,
  todos,
  clearCompletedTodos,
  deleteCurrentTask
}) => (
  <div className="delete-stuff">
    <button className="btn delete" onClick={() => clearCompletedTodos()}>
      Clear completed TODOs
    </button>
    <button className="btn delete" onClick={() => deleteCurrentTask()}>
      Delete Current Task
    </button>
  </div>
)

export default DeleteButtons
