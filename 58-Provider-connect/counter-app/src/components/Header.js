import React, {Component} from 'react'
import logo from '../logo.svg';
import {connect} from 'react-redux'

//Goal is to give Header a prop called count
const Header = (props) => {
  console.log("Header props", props)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: props.color}}>Welcome to React</h1>
        </header>
    );
}
const mapStateToProps = (state) => {
  return {
    //props: store.something
    counterValue: state.count
  }
}

// const withCount = connect(mapStateToProps)
// const BetterHeader = connect(mapStateToProps)(Header)
export default connect(mapStateToProps)(Header)

// const withCount = (SimpleComponent) => {
//   class BetterComponent extends React.Component {
//     render(){
//       return <SimpleComponent countValue={store.getState().count}/>
//     }
//   }
//   return BetterComponent
// }

// const BlueHeader= withBlue(Header)
// const BetterHeader = withRouter(Header)
// const BetterComponent = func(AComponent)
