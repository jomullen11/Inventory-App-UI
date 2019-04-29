import React, { Component } from 'react'
import { API_URL } from '../Navigation/Config'

class FestivalUpdate extends Component {
    state={
        name: this.props.read.name,
        type: this.props.read.type,
        location: this.props.read.location,
        desc: this.props.read.desc,
        expire: this.props.read.expire
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${API_URL}/festival/${ this.props.read._id }`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: { 'content-type' : 'application/json' }
        }).then( this.setState({
            name: '',
            type: '',
            location: '',
            desc: '',
            expire: ''
        }))
        .then(window.location.reload())
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
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
        )
    }
}

export default FestivalUpdate