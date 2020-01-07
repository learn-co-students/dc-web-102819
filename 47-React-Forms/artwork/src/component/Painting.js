import React from 'react'

const Painting = (props) => {
  let {paintingObj: {title, artist: {name}}} = props
  return (
    <div
      className="ui card"
      onClick={() => props.updatePainting(props.paintingObj)}
    >
      <h3>{`${title} by ${name}`}</h3>
    </div>
  )
}

export default Painting
