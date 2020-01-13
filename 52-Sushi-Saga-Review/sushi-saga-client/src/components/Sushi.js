import React from 'react'

const Sushi = (props) => {
  
  // Deconstruct sushi vars from props object
  const {img_url, name, price, id, isEaten} = props.sushiData

  return (
    <div className="sushi">
      <div className="plate" data-id={id}
           onClick={props.eatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi