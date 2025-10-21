const taskReducer = (tasks, action) => {
      switch (action.type) {
            case "add": {
                  return [
                        ...tasks,
                        {
                              id: crypto.randomUUID(),
                              ...action.task
                        }
                  ]
            }
            case "delete": {
                  return tasks.filter((task) => task.id !== action.id)
            }
            case "edit": {
                  const updatedTask = tasks.map(task => {
                        if (task.id === action.task.id) {
                              return action.task
                        } else {
                              return task
                        }
                  })
                  return updatedTask
            }
            default:
                  {
                        throw Error('Unknown action: ' + action.type);
                  }
      }
}

export default taskReducer