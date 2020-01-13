import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// Stateless container for passing props and rendering sushis
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushisPage.map((sushi, index)=> {
          return <Sushi 
            sushiData={sushi} 
            key={index} 
            eatSushi={props.eatSushi}/>
        })
        }
        <MoreButton changeSushisPage={props.changeSushisPage}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer