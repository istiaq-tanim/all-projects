import { useTask } from "../../hooks/useTask";
import AddTask from "./AddTask";
import TaskColumn from "./TaskColumn";

function TaskBoard() {
      const { tasks } = useTask()

      const todoTasks = tasks.filter(task => task.category === "todo").sort((a, b) => new Date(b.date) - new Date(a.date))
      const progressTasks = tasks.filter(task => task.category === "progress").sort((a, b) => new Date(b.date) - new Date(a.date))
      const doneTasks = tasks.filter(task => task.category === "done").sort((a, b) => new Date(b.date) - new Date(a.date))
      const reviseTasks = tasks.filter(task => task.category === "revise").sort((a, b) => new Date(b.date) - new Date(a.date))

      return (
            <div className="mx-auto max-w-7xl p-6">
                  <AddTask></AddTask>
                  <div class="-mx-2 mb-6 flex flex-wrap">
                        <TaskColumn categoriesTask={todoTasks} color="indigo" title="To-Do"></TaskColumn>
                        <TaskColumn categoriesTask={progressTasks} color="yellow" title="On Progress"></TaskColumn>
                        <TaskColumn categoriesTask={doneTasks} color="teal" title="Done"></TaskColumn>
                        <TaskColumn categoriesTask={reviseTasks} color="rose" title="Done"></TaskColumn>
                  </div>
            </div>
      )
}

export default TaskBoard
