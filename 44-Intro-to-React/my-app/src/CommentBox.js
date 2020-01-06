import React from 'react'
import Comment from './Comment'

const commentsArray = [
  {id: 1, content: "Hello", author: "Ann"},
  {id: 2, content: "Hi", author: "Trevor"},
  {id: 3, content: "Sup", author: "Chine"},
  {id: 4, content: "CATS", author: "Paul"}
]

//To create a component, create a class
class CommentBox extends React.Component{
  render(){
    return (
      <div className="comment-box">
        COMMENTS GO HERE
        {
          commentsArray.map(c => <Comment key={c.content} commentData={c}/> )
        }
      </div>
    )
  }
}

// class Ann extends Component{
//   render(){
//     return <p>Ann was here</p>
//   }
// }


/*
//map returns
[
  <Comment/>,
  <Comment/>,
  <Comment/>,
  <Comment/>
]

//forEach return
[
  {id: 1, content: "Hello", author: "Ann"},
  {id: 2, content: "Hi", author: "Trevor"},
  {id: 3, content: "Sup", author: "Chine"},
  {id: 4, content: "CATS", author: "Paul"}
]
*/
export default CommentBox
