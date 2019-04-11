import React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import haveItem from './Reducers'
import HaveDisplay from './Components/HaveDisplay'

const store = createStore(haveItem)

const InventoryRedux = () => {
return(
    <Provider store={store}>
        <HaveDisplay />
    </Provider>,
    document.getElementById('root')
)}

export default InventoryRedux