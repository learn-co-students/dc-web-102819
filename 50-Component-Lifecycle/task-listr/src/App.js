import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    console.warn("App constructor()")
    super()
    this.state = {
      formText: '',
      tasks: []
    }
  }

  componentDidMount(){
    console.warn("App componentDidMount()")
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArray => {
      this.setState({tasks: tasksArray})
    })
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      //we want tasks to be an exact COPY of tasks,
      //but with newTasks pushed in
      this.setState({tasks:  [...this.state.tasks, newTask]  })
    })
    event.target.reset()
  }

  //state changing callback
  removeTasks = (id) => {
    console.log("removing task", id)
    fetch(`http://localhost:3000/tasks/${id}`,{
      method: "DELETE"
    })

    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
    //this.setState({tasks: remove that task})
  }

  render() {
    console.warn("App render()")
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.tasks}
          removeTasks={this.removeTasks}
        />
      </div>
    );
  }
}

export default App;
