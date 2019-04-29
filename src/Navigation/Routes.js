import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../Components/Homepage'
import Survival from '../Components/Survival'
import Kitchen from '../Components/Kitchen'
import Festival from '../Components/Festival'
import Home from '../Components/HomeInventory'

class Routes extends Component{
    render(){
        return(
            <div>
                {/* <Router> */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/survival' component={Survival} />
                    <Route path='/kitchen' component={Kitchen} />
                    <Route path='/festival' component={Festival} />
                    <Route path='/home' component={Home} />
                </Switch>
                {/* </Router> */}
            </div>
        )
    }
}

export default Routes