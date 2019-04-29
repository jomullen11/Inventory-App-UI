import React, { Component } from 'react'
import { API_URL  } from '../Navigation/Config'
import SurvivalUpdate from './SurvivalUpdate'

class SurvivalPresenter extends Component {
    state = {
        isUpdating: false
    }

    handleDelete = async () => {
        await fetch(`${API_URL}/survival/${ this.props.read._id }`, {
            method: 'DELETE',
        })
        .then(() => window.location.reload())
        .catch(err => console.log(err))
    }

    toggleUpdate = () => {
        this.setState({ isUpdating: !this.state.isUpdating })
    }

    updateForm = () => (
        <div>
            <SurvivalUpdate read={this.props.read} closeUpdate={this.toggleUpdate} />
            <input type='button' value="Cancel" onClick={this.toggleUpdate} />
        </div>
    )

    buttons = () => (
        <div>
            <input type='button' className='delete-update-buttons' value='Delete' onClick={this.handleDelete} />
            <input type='button' className='delete-update-buttons' value='Update' onClick={this.toggleUpdate} />
        </div>
    )

    render(){
        const survivalItems = this.props.read
        return(
            <form className="readForm container">
                <ul>
                    <h1 className='readItemsH1'>{survivalItems.name}</h1>
                    Type: {survivalItems.type} <br/>
                    { survivalItems.location ? 'Location: ' + survivalItems.location : null } <br/>
                    { survivalItems.desc ? 'Description: ' + survivalItems.desc : null } <br/>
                    { survivalItems.expire ? 'Expiration: ' + survivalItems.expire : null }
                </ul>
                    { this.state.isUpdating ? <this.updateForm /> : <this.buttons /> }
            </form>
        )
    }
}

export default SurvivalPresenter