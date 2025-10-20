const taskReducer = (tasks, action) => {
      switch (action.type) {
            case "delete": {
                  return tasks.filter((task) => task.id !== action.id)
            }
            default:
                  {
                        throw Error('Unknown action: ' + action.type);
                  }
      }
}

export default taskReducer