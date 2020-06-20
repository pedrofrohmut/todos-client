const TaskListItem = ({ task, className, setActiveItem }) => (
  <li className={className} onClick={() => setActiveItem(task._id)}>
    {task.name}
  </li>
)

export default TaskListItem
