import { useTask } from "../../hooks/useTask";
import AddTask from "./AddTask";
import TaskColumn from "./TaskColumn";

function TaskBoard() {
      const { tasks } = useTask()

      const todoTasks = tasks.filter(task => task.category === "todo")
      console.log(todoTasks)
      return (
            <div className="mx-auto max-w-7xl p-6">
                  <AddTask></AddTask>
                  <div class="-mx-2 mb-6 flex flex-wrap">
                        <TaskColumn categoriesTask={todoTasks} color="bg-indigo-600" title="To-Do"></TaskColumn>
                  </div>
            </div>
      )
}

export default TaskBoard
