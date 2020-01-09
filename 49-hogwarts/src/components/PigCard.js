import React, { Component } from 'react'

class PigCard extends Component {
  constructor(){
    super()
    this.state = {
      detailToggle: false
    }
  }

  imageName = name => {
    return name.toLowerCase().replace(/ /g, '_')
  }

  handleClick = () => {
    // this.setState(previousState => {
    //   return { detailToggle: !previousState.detailToggle}
    // })

    this.setState({ detailToggle: !this.state.detailToggle })
  }

  render(){
    const { name, specialty, greased, weight, 'highest medal achieved': medal } = this.props.hog


    return (
      <div className="ui card" onClick={this.handleClick}>
        <div className="image">
          <img alt='piggy' src={require(`../hog-imgs/${ this.imageName(name) }.jpg`)} />
        </div>
          <div className="content">
          <a className="header">{ name }</a>
            
          </div>

        {
          this.state.detailToggle ? (
            <div className="extra content">
              <p>Specialty: {specialty} </p>
              <p>Greased?: {greased.toString()} </p>
              <p>Weight: {weight} </p>
              <p>Medal: {medal} </p>

            </div>
          ) : null
        }
   

      </div>
      )
  }
}

export default PigCard

/* 

*/