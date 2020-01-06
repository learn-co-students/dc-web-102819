import React from 'react'

class Header extends React.Component {
  render(){
    // console.log("Inside Header", this.props)
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
        <h2 className="ui header">
          <i className={`${this.props.icon} icon`}></i>
          <div className="content">{this.props.title}</div>
          <div className="sub header">{this.props.tagline}</div>
        </h2>
      </div>
    )
  }
}

export default Header
