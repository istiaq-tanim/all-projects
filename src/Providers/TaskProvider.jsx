import { useState } from 'react'
import { TaskContext } from '../context'
import initialTasks from '../data'

function TaskProvider({ children }) {

      const [tasks, setTasks] = useState(initialTasks)
      return (
            <TaskContext.Provider value={{ tasks, setTasks }}>
                  {children}
            </TaskContext.Provider>
      )
}

export default TaskProvider
