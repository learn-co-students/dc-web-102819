import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)//how to initialize state based on initial props
    console.warn(`Task ${this.props.task.id} constructor()`)
    this.state = {
      color: "black"
    }
  }

  //form here, you can't this.setState({tasks})

  onChangeColor = () => {
    this.setState({color: "red"})
  }

  sayHi(){
    console.log("helllllllloooooooooo")
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate()`)
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount()`)
    window.addEventListener("resize", this.sayHi)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount()`)
    window.removeEventListener("resize", this.sayHi)
  }

  render(){
    console.warn(`Task ${this.props.task.id} render()`)
    return(
      <div>
        <b
          onClick={this.onChangeColor}
          style={{color: this.state.color}}
        >
          {this.props.task.text}
        </b>
        <button onClick={() => this.props.removeTasks(this.props.task.id)}>X</button>
      </div>
    )
  }
}

export default Task
