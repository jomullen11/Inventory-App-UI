import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../Components/Homepage'
import Survival from '../Components/Survival'
import Kitchen from '../Components/Kitchen'
import Festival from '../Components/Festival'
import HomeInvent from '../Components/HomeInventory'
import AddNew from '../Components/AddNew'

class Routes extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/survival' component={Survival} />
                    <Route path='/kitchen' component={Kitchen} />
                    <Route path='/festival' component={Festival} />
                    <Route path='/home' component={HomeInvent} />
                    <Route path='/create' component = {AddNew} />
                </Switch>
            </div>
        )
    }
}

export default Routes