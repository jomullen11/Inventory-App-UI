import React, { Component } from 'react'
import FestivalUpdate from './FestivalUpdate'
import { API_URL } from '../Navigation/Config'

class FestivalPresenter extends Component {
    state={
        isUpdating: false
    }

    handleDelete = () => {
        fetch(`${API_URL}/festival/${ this.props.read._id }`, {
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
            <FestivalUpdate read={this.props.read} onClick={this.toggleUpdate} />
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
        const festivalItems = this.props.read
        return(
            <form className="readForm container">
                <ul>
                    <h1 className='readItemsH1'>{festivalItems.name}</h1>
                    Type: {festivalItems.type} <br/>
                    {festivalItems.location ? 'Location: ' + festivalItems.location : null} <br/>
                    {festivalItems.desc ? 'Description: ' + festivalItems.desc : null} <br/>
                    {festivalItems.expire ? 'Expiration: ' + festivalItems.expire : null}
                </ul>
                    { this.state.isUpdating ? <this.updateForm /> : <this.buttons />}
            </form>
        )
    }
}

export default FestivalPresenter