import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {vote} from '../redux/actions'

class PaintingDetail extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {this.props.vote(this.props.painting.id)}}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}
//how we read fomr the store
const mapStateToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(
      painting => painting.id === ownProps.match.params.paintingId
    )
  }
}
//how we write to the store
// const mapDispatchToProps = (dispatch) => {
//   return {
//     vote: (paintingId) => { dispatch( vote(paintingId) ) }
//     //prop: () => {}
//   }
// }

export default withRouter(connect(mapStateToProps, {vote} )(PaintingDetail))
