const TaskListItem = ({ task, className, activeItem, setActiveItem }) => (
  <li className={className} onClick={() => setActiveItem(task._id)}>
    {task.name}
  </li>
)

export default TaskListItem
