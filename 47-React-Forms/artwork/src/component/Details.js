import React from 'react'

class Details extends React.Component {
  render(){
    let {image, title, artist: {name}, dimensions: {height, width}} = this.props.paintingObj
    return (
      <div className="ui card">
      	<div>
      		<img alt="pix" src={image} />
      	</div>
      	<p>{title} by {name}</p>
      	<p>Height: {height} x Width: {width}</p>
      </div>
    )
  }
}

export default Details
