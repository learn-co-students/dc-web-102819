import React from 'react'
//function comonents don't use this
const Card = (props) => {
//const Card = ({title, image, dimensions:{height, width}, artist:{name}}}) => {
  let {paintingData: {title, image, dimensions:{height, width}, artist:{name}}} = props
  return (
    <div className="ui card">
    	<div>
    		<img src={image} alt={title}/>
    	</div>
    	<p>{title} by {name}</p>
    	<p>Height: {height} x Width: {width}</p>
    </div>
  )
}

export default Card
