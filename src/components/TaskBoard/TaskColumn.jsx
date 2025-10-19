import SingleTask from "./SingleTask"

function TaskColumn({ color, categoriesTask, title }) {
      return (
            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                  <div className={`rounded-lg ${color} p-4 `}>
                        <div className="mb-2 flex items-center justify-between">
                              <h3 className="text-lg font-semibold">{title} (45)</h3>
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                              >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6l9 0" />
                                    <path d="M4 12l7 0" />
                                    <path d="M4 18l7 0" />
                                    <path d="M15 15l3 3l3 -3" />
                                    <path d="M18 6l0 12" />
                              </svg>
                        </div>
                        <div>
                              {
                                    categoriesTask.map(task => <SingleTask key={task.id} color={color} task={task}></SingleTask>)
                              }
                        </div>


                  </div>
            </div>
      )
}

export default TaskColumn
