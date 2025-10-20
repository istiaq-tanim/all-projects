import { useState } from "react"
import { useTask } from "../../hooks/useTask"

function AddEditTaskModal({ onCloseModal }) {
      const { dispatch } = useTask()
      const [task, setTask] = useState({
            title: "",
            description: "",
            date: "",
            category: "todo"
      })

      const handleChange = (e) => {
            setTask({
                  ...task,
                  [e.target.name]: e.target.value
            })
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            dispatch({
                  type: "add",
                  task
            })
            setTask({
                  title: "",
                  description: "",
                  date: "",
                  category: ""
            })
            onCloseModal()
      }
      return (
            <>

                  <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                              <div className="p-6">
                                    <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
                                    <form onSubmit={handleSubmit}>
                                          <div className="mb-4">
                                                <label
                                                      for="title"
                                                      className="mb-1 block text-sm font-medium text-gray-300"
                                                >Task Name</label
                                                >
                                                <input
                                                      type="text"
                                                      id="title"
                                                      name="title"
                                                      value={task.title}
                                                      onChange={handleChange}
                                                      required
                                                      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                          </div>
                                          <div className="mb-4">
                                                <label
                                                      for="description"
                                                      className="mb-1 block text-sm font-medium text-gray-300"
                                                >Description</label
                                                >
                                                <textarea
                                                      id="description"
                                                      name="description"
                                                      value={task.description}
                                                      onChange={handleChange}
                                                      rows="3"
                                                      required
                                                      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                ></textarea>
                                          </div>
                                          <div className="mb-4">
                                                <label
                                                      for="date"
                                                      className="mb-1 block text-sm font-medium text-gray-300"
                                                >Due Date</label
                                                >
                                                <input
                                                      type="date"
                                                      id="date"
                                                      name="date"
                                                      value={task.date}
                                                      onChange={handleChange}
                                                      required
                                                      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                          </div>

                                          <div className="mb-4">
                                                <label
                                                      for="category"
                                                      className="mb-1 block text-sm font-medium text-gray-300"
                                                >Category</label
                                                >
                                                <select
                                                      id="category"
                                                      name="category"
                                                      value={task.category}
                                                      required
                                                      onChange={handleChange}
                                                      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                >
                                                      <option value="todo">To-Do</option>
                                                      <option value="progress">On Progress</option>
                                                      <option value="done">Done</option>
                                                      <option value="revised">Revised</option>
                                                </select>
                                          </div>

                                          <div className="flex justify-end space-x-3">
                                                <button
                                                      onClick={onCloseModal}
                                                      type="button"
                                                      className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                      Cancel
                                                </button>
                                                <button
                                                      type="submit"
                                                      className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                      Create Task
                                                </button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default AddEditTaskModal
