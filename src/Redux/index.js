import React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import haveItem from './Reducers'
import HaveDisplay from './Components/HaveDisplay'
import configureStore from '../store/configureStore';

const store = configureStore()

const InventoryRedux = () => {
return(
    <Provider store={store}>
        <HaveDisplay />
    </Provider>,
    document.getElementById('root')
)}

export default InventoryRedux