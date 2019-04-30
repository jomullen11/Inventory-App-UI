import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import haveItem from '../Reducers'
import VisibleItemList from '../Containers/VisibleItemList'
import Footer from '../Components/Footer'
import AddItem from '../Containers/AddItem'
import FestivalPresenter from './FestivalPresenter'
import { API_URL } from '../Navigation/Config'

const store = createStore(haveItem)

class Festival extends Component{
    constructor(props, context){
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    this.state = {
        read: [],
        show: false,
        name: '',
        type: '',
        location: '',
        desc: '',
        expire: ''
    }
    };

    handleClose = () => {
        this.setState({
            show: false,
            name: '',
            type: '',
            location: '',
            desc: '',
            expire: ''
        })
        window.location.reload()
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    handleReset = () => {
        this.setState({
            name: '',
            type: '',
            location: '',
            desc: '',
            expire: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${API_URL}/festival`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            header: { 'content-type' : 'application/json' }
        }).then(
            this.setState({
                name: '',
                type: '',
                location: '',
                desc: '',
                expire: ''
            })
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    getRead = () => {
        fetch(`${API_URL}/festival`)
        .then(res => res.json())
        .then(data => data.map(element => <FestivalPresenter read={element} refresh={this.getRead} />))
        .then(components => this.setState({read: components}))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getRead()
    }

    render(){
        return(
            <div>
                <h1>Your Festival Inventory</h1>
                <div>
                    <Button variant='primary' onClick={this.handleShow} className='openModal' >
                    <h2 className="openModalText">+</h2>
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form className="addNew" onSubmit={this.handleSubmit}>
                            <input 
                                type='text'
                                name='name'
                                value={this.state.name}
                                placeholder='Item Name'
                                onChange={this.handleChange}
                            />
                            <br/>
                            <input 
                                type='text'
                                name='type'
                                value={this.state.type}
                                placeholder='Item Type'
                                onChange={this.handleChange}
                            />
                            <br/>
                            <input 
                                type='text'
                                name='location'
                                value={this.state.location}
                                placeholder='Item Location'
                                onChange={this.handleChange}
                            />
                            <br/>
                            <textarea 
                                type='text'
                                name='desc'
                                value={this.state.desc}
                                placeholder='Description'
                                onChange={this.handleChange}
                            />
                            <br/>
                            {/* Expiration date toggle */}
                            <div className='Modaltoggle'>
                                <input type='checkbox' value='selected' id='expiration-date' className="toggleInput" />
                                <label htmlFor='expiration-date' className='toggleLabel'>Need to Add an Expiration/Rotate Stock Date?</label>
                                <div className='toggleContent'>
                                    <input 
                                        type='date'
                                        name='expire'
                                        value={this.state.expire}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <input type='submit' value="Add Item"/>
                            <input type='reset' value="Reset" onClick={this.handleReset}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant='primary' onClick={this.handleSubmit}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </div>
                <Provider store={store}>
                    <div className="redux-add-item"><AddItem /></div> 
                    <div className="redux-buttons"><Footer /></div> 
                    <div className="redux-items"><VisibleItemList /></div>
                </Provider>
                {this.state.read}
            </div>
        )
    }
}

export default Festival