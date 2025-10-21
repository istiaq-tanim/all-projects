import { useState } from "react";
import { colorClassesBackGround, colorClassesText } from "../../constatnt";
import { useTask } from "../../hooks/useTask";
import AddEditTaskModal from "./AddEditTaskModal";
import AddTask from "./AddTask";
import TaskColumn from './TaskColumn';

function TaskBoard() {
      const { tasks } = useTask()
      const [openModal, setOpenModal] = useState(false)
      const [editTask, setEditTask] = useState(null)

      const getTaskBasedOnCategory = (category) => {
            const categoriesTask = tasks.filter(task => task.category === category)
            return categoriesTask
      }

      const handleEdit = (task) => {
            setEditTask(task)
            setOpenModal(true)
      }

      const handleClose = () => {
            setOpenModal(false)
            setEditTask(null)
      }

      const categories = ["todo", "progress", "done", "revise"]
      return (
            <div className="mx-auto max-w-7xl p-6">
                  {
                        openModal && <AddEditTaskModal editTask={editTask} onCloseModal={handleClose}></AddEditTaskModal>
                  }
                  <AddTask onOpenModal={() => setOpenModal(true)}></AddTask>
                  <div class="-mx-2 mb-6 flex flex-wrap">
                        {
                              categories.map((category) => (
                                    <TaskColumn categoriesTask={getTaskBasedOnCategory(category)} onHandleEdit={handleEdit} background={colorClassesBackGround[category]} color={colorClassesText[category]} title={category}></TaskColumn>
                              ))
                        }

                  </div>
            </div >
      )
}

export default TaskBoard
