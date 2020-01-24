import React from "react";
import {connect} from 'react-redux'
import {search} from '../redux/actions'

const Searchbar = props => {
  return (
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  );
}
//onChange={e => props.onChange(e.target.value)}


//how does this component read from the store
const mapStateToProps = (state) => {
  return {
    value: state.searchText
  }
  //props: state.
}

//how does this component update the store
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (text) => {dispatch( search(text) )}
//   }
//   //props: func
// }

export default connect(mapStateToProps, {onChange: search} )(Searchbar);
