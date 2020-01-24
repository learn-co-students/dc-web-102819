import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  decrement = (num) => {
    this.props.dispatch({type: "DECREMENT_COUNT", payload: num})
  };

  increment = (num) => {
    this.props.dispatch({type: "INCREMENT_COUNT", payload: num})
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.counterValue}</h1>
        <h3>{`The current count is less than ${this.props.counterValue
          + 5 - this.props.counterValue % 5}`}</h3>

        <button onClick={()=>this.decrement(5)}> -5 </button>
        <button onClick={()=>this.decrement(1)}> - </button>
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({counterValue: state.count})
export default connect(mapStateToProps)(Counter)

// const withCount = connect(mapStateToProps)
// const BetterCounter = withCount(Counter)
// export default BetterCounter
