import { useState } from "react";
import { useTask } from "../../hooks/useTask";
import AddEditTaskModal from "./AddEditTaskModal";
import AddTask from "./AddTask";
import TaskColumn from "./TaskColumn";

function TaskBoard() {
      const { tasks } = useTask()
      const [openModal, setOpenModal] = useState(false)
      const [editTask, setEditTask] = useState(null)

      const todoTasks = tasks.filter(task => task.category === "todo")
      const progressTasks = tasks.filter(task => task.category === "progress")
      const doneTasks = tasks.filter(task => task.category === "done")
      const reviseTasks = tasks.filter(task => task.category === "revise")

      const handleEdit = (task) => {
            setEditTask(task)
            setOpenModal(true)
      }

      const handleClose = () => {
            setOpenModal(false)
            setEditTask(null)
      }
      return (
            <div className="mx-auto max-w-7xl p-6">
                  {
                        openModal && <AddEditTaskModal editTask={editTask} onCloseModal={handleClose}></AddEditTaskModal>
                  }
                  <AddTask onOpenModal={() => setOpenModal(true)}></AddTask>
                  <div class="-mx-2 mb-6 flex flex-wrap">
                        <TaskColumn categoriesTask={todoTasks} onHandleEdit={handleEdit} color="indigo" title="To-Do"></TaskColumn>
                        <TaskColumn categoriesTask={progressTasks} onHandleEdit={handleEdit} color="yellow" title="On Progress"></TaskColumn>
                        <TaskColumn categoriesTask={doneTasks} onHandleEdit={handleEdit} color="teal" title="Done"></TaskColumn>
                        <TaskColumn categoriesTask={reviseTasks} onHandleEdit={handleEdit} color="rose" title="Done"></TaskColumn>

                  </div>
            </div >
      )
}

export default TaskBoard
