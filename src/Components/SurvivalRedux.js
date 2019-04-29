// import React, { Component } from 'react'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import haveItem from '../Reducers'
import HaveDisplay from './HaveDisplay'
// import NavBar from '../Navigation/NavBar'
// import Routes from '../Navigation/Routes'

const store = createStore(haveItem)

const SurvivalRedux = () => {
return(
    render(
    <Provider store={store}>
        <HaveDisplay />
    </Provider>,
    document.getElementById('survivalRedux')
))}


export default SurvivalRedux