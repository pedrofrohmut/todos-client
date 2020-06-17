const AddTaskForm = () => (
  <form action="">
    <input
      type="text"
      className="new list"
      placeholder="new list name"
      aria-label="new list name"
    />
    <button className="btn create" aria-label="create new list">
      +
    </button>
  </form>
)

export default AddTaskForm
