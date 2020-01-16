import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    let token = localStorage.getItem("token")
    if(token){ //we should log the user in automatically
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
          "Authentication" : token
        }
      })
      .then(res => res.json())
      .then(data => {
        this.updateUser(data)
        this.setState({loading: false})
      })
    }else{
      this.setState({loading: false})
    }
      //do nothing the currentUser should stay null
  }

  updateUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    return (
      <Fragment>
        <Nav user={this.state.currentUser} updateUser={this.updateUser}/>
        {!this.state.loading ?
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/profile" render={() => this.state.currentUser ?
              <Profile user={this.state.currentUser}/> :
              <Redirect to="/login" />
            } />
            <Route exact path="/login" render={() => this.state.currentUser ?
              <Redirect to="profile"/> :
              <LoginForm updateUser={this.updateUser}/>
            }
            />
            <Route component={NotFound} />
          </Switch>
          : null
        }
      </Fragment>
    )
  }
}

export default withRouter(App)
