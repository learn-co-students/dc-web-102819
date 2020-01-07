import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'
import Details from '../component/Details'

class PaintingsContainer extends Component{

  //helper instance method
  getFilteredPaintings(){
    return paintingsData.filter(p => p.title.toLowerCase().includes(
      this.props.searchValue.toLowerCase()
    ))
    /*bad logic
    paintingsData.filter(p => p.title.include(
      document.querySelector("input").value)
    )
    */
  }

  render(){
    console.log("PaintingsContainer:", this.props.searchValue)
    return (
      <div>
      {
        this.props.activePainting ?
          <Details paintingObj={this.props.activePainting}/> :
          null
      }
      {
        this.getFilteredPaintings().map(painting =>
        <Painting
          key={painting.id}
          paintingObj={painting}
          updatePainting={this.props.updatePainting}
        />)
      }
      </div>
    )
  }
}

export default PaintingsContainer
