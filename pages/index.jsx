import Head from "next/head"

const IndexPage = () => (
  <>
    <Head>
      <title>Todo List</title>
      <link rel="stylesheet" href="/index.css" />
    </Head>

    <h1 className="title">Stuff i need to do</h1>

    <div className="all-tasks">
      <h2 className="task-list-title">My Lists</h2>
      <ul className="task-list">
        <li className="active-list">Youtube</li>
        <li>Work</li>
        <li>Groceries</li>
      </ul>
      <form action="">
        <input
          type="text"
          className="new list"
          placeholder="new list name"
          aria-label="new list name"
        />
        <button className="btn list" aria-label="create new list">
          +
        </button>
      </form>
    </div>

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
            <input type="checkbox" id="task-1" />
            <label htmlFor="task-1">
              <span className="custom-checkbox"></span>
              edit todo list video
            </label>
          </div>

          {/* Task 3 */}
          <div className="task">
            <input type="checkbox" id="task-1" />
            <label htmlFor="task-1">
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
            <button className="btn task" aria-label="create new task">
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
  </>
)

export default IndexPage
