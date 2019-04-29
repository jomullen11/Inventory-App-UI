import React, { Component } from 'react'
import { API_URL } from '../Navigation/Config'
import KitchenUpdate from './KitchenUpdate'

class KitchenPresenter extends Component {
    state = {
        isUpdating: false
    }
    
    handleDelete = async () => {
        await fetch(`${API_URL}/kitchen/${ this.props.read._id }`, {
            method: 'DELETE'
        }).then(window.location.reload())
        .catch(err => console.log(err))
    }

    toggleUpdate = () => {
        this.setState({
            isUpdating: !this.state.isUpdating
        })
    }

    updateForm = () => (
        <div>
            <KitchenUpdate read={this.props.read} closeUpdate={this.toggleUpdate} />
            <input type='button' value='Cancel' onClick={this.toggleUpdate} />
        </div>
    )

    buttons = () => (
        <div>
            <input type='button' value='Delete' onClick={this.handleDelete} />
            <input type='button' value='Update' onClick={this.toggleUpdate} />
        </div>
    )


    render(){
        const kitchenItems = this.props.read
        return(
            <form className="readForm container">
                <ul>
                    <h1 className='readItemsH1'>{kitchenItems.name}</h1>
                    Type: {kitchenItems.type} <br/>
                    { kitchenItems.location ? 'Location: ' + kitchenItems.location : null } <br/>
                    { kitchenItems.desc ? 'Description: ' + kitchenItems.desc : null } <br/>
                    { kitchenItems.expire ? 'Expiration: ' + kitchenItems.expire : null }
                </ul>
                    { this.state.isUpdating ? <this.updateForm /> : <this.buttons />}
            </form>
        )
    }
}

export default KitchenPresenter