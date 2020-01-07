import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'
import Details from '../component/Details'

class PaintingsContainer extends Component{
  constructor(){
    super()
    this.state = {
      activePainting: null
    }
  }

  //event callback that changes the state
  //write it as an arrow function, the value of this is binded corectly
  //this.setState (setting the state of PaintingsContainer)
  updatePainting = (newPainting) => {
    console.log("changing state here")
    this.setState( {activePainting: newPainting} )
  }

  render(){
    return (
      <div>
      {
        this.state.activePainting ?
          <Details paintingObj={this.state.activePainting}/> :
          null
      }
      {
        paintingsData.map(painting =>
        <Painting
          key={painting.id}
          paintingObj={painting}
          updatePainting={this.updatePainting}
        />)
      }
      </div>
    )
  }
}

export default PaintingsContainer
