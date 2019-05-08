import React from 'react'
import { Provider } from 'react-redux'
import HaveDisplay from '../Components/ReduxComponents/HaveDisplay'
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