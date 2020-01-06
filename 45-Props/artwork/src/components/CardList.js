import React from 'react'
import Card from './Card'
import paintings from '../data/paintings'

//write a function called CardList
//return some JSX
const CardList = () => {
  return (
    <div>
      { paintings.map(painting => <Card key={painting.id} paintingData={painting} />) }
    </div>
  )
}

export default CardList
