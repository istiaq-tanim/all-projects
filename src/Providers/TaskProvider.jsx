import { useReducer } from 'react'
import { TaskContext } from '../context'
import initialTasks from '../data'
import taskReducer from '../reducers/taskReducer'

function TaskProvider({ children }) {

      const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
      return (
            <TaskContext.Provider value={{ tasks, dispatch }}>
                  {children}
            </TaskContext.Provider>
      )
}

export default TaskProvider
