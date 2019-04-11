import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const active = {color: '#FFF9EF', backgroundColor: '#73A3FB', boxShadow: '0 0 0 1px #000'}

class NavBar extends Component {
    render(){
        return(
            // <div>
            //     <nav id="nav-bar">
                    // <NavLink exact to='/' activeStyle={active} className="nav-link">The Hub</NavLink>
                    // <NavLink to='/survival' activeStyle={active} className="nav-link">Survival</NavLink>
                    // <NavLink to='/kitchen' activeStyle={active} className="nav-link">Kitchen</NavLink>
                    // <NavLink to='/home' activeStyle={active} className="nav-link">Home</NavLink>
                    // <NavLink to='/festival' activeStyle={active} className="nav-link">Festival</NavLink>
            //     </nav>
            // </div>
            <div>
            <input type="checkbox" id="slide" name="" value="" />
            <div className="container menu-button" id="menu-button">
                <label htmlFor="slide" className="toggle">☰</label>
                <nav className="sidebar"> 
                    <ul>
                    <li>
                        <NavLink exact to='/' activeStyle={active} className="hubLink">The Hub</NavLink>
                    </li>
                    <li>
                        <NavLink to='/survival' activeStyle={active} className="surv-link">Survival</NavLink>
                    </li>
                    <li>
                        <NavLink to='/kitchen' activeStyle={active} className="kitc-link">Kitchen</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home' activeStyle={active} className="home-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/festival' activeStyle={active} className="fest-link">Festival</NavLink>
                    </li>
                    <li>
                        <NavLink to='/create' activeStyle={active}>Create</NavLink>
                    </li>
                    </ul>
                </nav>
            </div>
            </div>
    )}
}

export default NavBar