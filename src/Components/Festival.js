import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createStore } from 'redux'
import haveItem from '../Reducers'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import VisibleItemList from '../Containers/VisibleItemList'
import Footer from '../Components/ReduxComponents/Footer'
import AddItem from '../Containers/AddItem'
import ItemPresenter from './ItemPresenter'
import { API_URL  } from '../Navigation/Config'

const store = createStore(haveItem)

export default class Festival extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    

    this.state = {
        read: [],
        redirect: false,
        show: false,
        activeRoute: this.props.location.pathname,
        name: '',
        type: '',
        desc: '',
        location: '',
        expire: ''
    };
      }
    
    handleClose() {
        this.setState({
            show: false,
            redirect: !this.state.redirect
        })
    }
    
    handleShow() {
    this.setState({ show: true });
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${ API_URL + this.props.location.pathname }`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: { "content-type": "application/json" } 
        })
            .then(
                this.setState({
                    name: '',
                    type: '',
                    desc: '',
                    location: '',
                    expire: ''
                })
            )
            .catch(err => console.log(err))
        
    }

    handleReset = () => {
        this.setState({
            name: '',
            type: '',
            desc: '',
            location: '',
            expire: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [ event.target.name ] : event.target.value
        })
    }
    
    getRead = async () => {
        fetch(`${ API_URL + this.props.location.pathname}`)
        .then(res => res.json())
        .then(data => data.map(element => <ItemPresenter read={element} activeRoute={this.state.activeRoute}/>))
        .then(components => this.setState({read : components}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getRead()
    }

    render() {
        const redirect = this.state.redirect

        const pageName = Array.from(this.props.location.pathname) // creating an array from location.pathname
        pageName.shift() // altering the array by removing the first index
        
        return(
            <div>
                <h1>{pageName}</h1>
                { redirect ? <Redirect to={{pathname: `/refresh${this.props.location.pathname}`, state: {from: this.props.location}}}/> : 
                <div>
                    <Button variant="primary" onClick={this.handleShow} className="openModal">
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
                                required
                            />
                            <br/>
                            <input
                                type='text'
                                name='type'
                                value={this.state.type}
                                placeholder='Item Type'
                                onChange={this.handleChange}
                                required
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
                            <div className="Modaltoggle">  
                                <input type="checkbox" value="selected" id="expiration-date" className="toggleInput" />
                                <label htmlFor="expiration-date" className="toggleLabel">Need to Add an Expiration/Rotate Stock Date?</label> 
                                <div className="toggleContent">
                                    <input
                                        type='date'
                                        name='expire'
                                        id="expireDate"
                                        value={this.state.expire}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <input type='submit' value='Add Item' />
                            <input type='reset' value='Reset' onClick={this.handleReset}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </div>
                }
            <Provider store={store}>
                <div className="redux-add-item container"><AddItem /></div> 
                <div className="redux-buttons container"><Footer /></div> 
                <div className="redux-items container"><VisibleItemList /></div>
            </Provider>
            {this.state.read}
            </div>
        )
    }
}