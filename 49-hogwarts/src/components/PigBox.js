import React from 'react'
import PigCard from './PigCard'

const PigBox = props => {
  return (
  <div className='ui cards'>
    { props.hogs.map(hog => <PigCard key={hog.name} hog={hog}/>) }
  </div>
  )
}

export default PigBox