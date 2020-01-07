import React from 'react'

const Painting = (props) => {
  let {paintingObj: {title, artist: {name}}} = props
  return (
    <div
      className="ui card"
      onClick={() => props.updatePainting(props.paintingObj)}
    >
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}

export default Painting
