import React, { Component } from 'react'
import { API_URL } from '../Navigation/Config'
import HomeInventUpdate from './HomeInventUpdate'

class HomePresenter extends Component {
    state = {
        isUpdating: false
    }

    handleDelete = async () => {
        await fetch(`${API_URL}/home/${ this.props.read._id }`, {
            method: 'DELETE'
        }).then(window.location.reload())
        .catch(err => console.log(err))
    }

    toggleUpdate = () => {
        this.setState({ isUpdating: !this.state.isUpdating})
    }

    updateForm = () => (
        <div>
            <HomeInventUpdate read={this.props.read} closeUpdate={this.toggleUpdate} />
            <input type='button' value='Cancel' onClick = {this.toggleUpdate} />
        </div>
    )

    buttons = () => (
        <div>
            <input type='button' value='Delete' onClick={this.handleDelete} />
            <input type='button' value='Update' onClick={this.toggleUpdate} />
        </div>
    )

    render() {
        const homeItems = this.props.read
        return(
            <form className='readForm container'>
                <ul>
                    <h1 className="readItemsH1">{homeItems.name}</h1>
                    Type: { homeItems.type } <br/>
                    { homeItems.location ? 'Location: ' + homeItems.location : null} <br/>
                    { homeItems.desc ? 'Description: ' + homeItems.desc : null } <br/>
                    { homeItems.expire ? 'Expiration: ' + homeItems.expire : null}
                </ul>
                { this.state.isUpdating ? <this.updateForm /> : <this.buttons />}
            </form>
        )
    }
}

export default HomePresenter