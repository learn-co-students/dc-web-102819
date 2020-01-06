import React, {Component} from 'react'

//functional component
//create a function with the component name
//take in props as an argument
//returns some JSX
//change this.props to just be props
// const Comment = (props) => {
//   console.log(props)
//   debugger
//   return (
//     <div>
//       <p className="comment">
//         {props.commentData.content}
//       </p>
//       <p> - {props.commentData.author}</p>
//     </div>
//   )
// }



// class component
class Comment extends Component {
  render(){
    console.log(this.props)
    debugger
    return (
      <div>
        <p className="comment">
          {this.props.commentData.content}
        </p>
        <p> - {this.props.commentData.author}</p>
      </div>
    )
  }
}
export default Comment
