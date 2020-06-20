const AddTodoForm = ({ getTodosByTaskId }) => (
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
)

export default AddTodoForm
