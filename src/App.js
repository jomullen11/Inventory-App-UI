import React, { Component, Fragment } from 'react'
import NavBar from './Navigation/NavBar'
import Routes from './Navigation/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import haveItem from './Reducers'

const store = createStore(haveItem)

class App extends Component{
    render(){
        return(
            <Fragment>
                <Provider store={store}>
                    <Router>
                        <NavBar />
                        <Routes />
                    </Router>
                </Provider>
            </Fragment>
        )
    }
}

export default App