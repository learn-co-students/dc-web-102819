import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    debugger
    return (<div className="ui cards">{this.props.potatoes.map(data => <Pet onAdoptPet={this.props.onAdoptPet} data={data}/>)}</div>)
  }
}

export default PetBrowser
