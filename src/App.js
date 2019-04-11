import React, { Component, Fragment } from 'react'
import NavBar from './Navigation/NavBar'
import Routes from './Navigation/Routes'

class App extends Component{
    render(){
        return(
            <Fragment>
                <NavBar />
                <Routes />
            </Fragment>
        )
    }
}

export default App