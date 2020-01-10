import React from 'react'

const Details = (props) => {
  return (
    <div className="card details">
      <div>
        <div className="row">{props.activePokemon.name.toUpperCase()}</div>
        <div className="row">
          <div><img
            alt={props.activePokemon.name}
            src={props.activePokemon.sprites.front_default} />
          </div>
          {
            props.activePokemon.stats.map(stat => <div className="block" key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Details
