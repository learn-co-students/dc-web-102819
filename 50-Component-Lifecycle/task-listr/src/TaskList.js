import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks.map(task => <Task
      key={task.id}
      task={task}
      removeTasks={props.removeTasks}
    />)
  )
}

export default TaskList
