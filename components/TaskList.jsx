import { useState, useEffect } from "react"

import TaskListItem from "./TaskListItem"

const TaskList = ({ tasks, activeItem, setActiveItem }) => (
  <ul className="task-list">
    {tasks &&
      tasks.length > 0 &&
      tasks.map((task) => (
        <TaskListItem
          className={
            !activeItem
              ? "list-name"
              : task._id === activeItem
              ? "list-name active-list"
              : "list-name"
          }
          task={task}
          setActiveItem={setActiveItem}
          key={task._id}
        />
      ))}
  </ul>
)

export default TaskList
