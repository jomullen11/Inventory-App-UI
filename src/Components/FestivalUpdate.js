import React, { Component, Fragment } from 'react'
import { API_URL } from '../Navigation/Config'
import { Redirect } from 'react-router-dom'

class FestivalUpdate extends Component {
    state={
        redirect: false,
        name: this.props.read.name,
        type: this.props.read.type,
        location: this.props.read.location,
        desc: this.props.read.desc,
        expire: this.props.read.expire
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const body = {
        //     name: this.state.name,
        //     type: this.state.type,
        //     location: this.state.location,
        //     desc: this.state.desc,
        //     expire: this.state.expire
        // }
        const {name, type, location, desc, expire} = this.state
        const body = {name, type, location, desc, expire}
        fetch(`${API_URL}/festival/${ this.props.read._id }`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { 'content-type' : 'application/json' }
        })
        .then(this.setState({redirect: !this.state.redirect}))
        // .then(window.location.reload())
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        const redirect = this.state.redirect
        console.log(redirect)
        return(
            <Fragment>
            { redirect ? <Redirect to={{pathname: '/refresh/festival', state: {from: this.props.location}}} /> :  
                <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    placeholder='Update Name'
                    onChange={this.handleChange}
                    required
                />
                <br/>
                <input
                    type='text'
                    name='type'
                    value={this.state.type}
                    placeholder='Update Type'
                    onChange={this.handleChange}
                    required
                />
                <br/>
                <input
                    type='text'
                    name='location'
                    value={this.state.location}
                    placeholder='Update Location'
                    onChange={this.handleChange}
                />
                <br/>
                <textarea
                    type='text'
                    name='desc'
                    value={this.state.desc}
                    placeholder='Update Description'
                    onChange={this.handleChange}
                />
                <br/>
                Update Expiration: <input
                    type='date'
                    name='expire'
                    value={this.state.expire}
                    onChange={this.handleChange}
                />
                <br/>
                <input type='submit' value='Update' />
                </form>
            }
            </Fragment>
        )
    }
}

export default FestivalUpdate