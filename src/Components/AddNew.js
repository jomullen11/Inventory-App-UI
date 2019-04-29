import React, { Component } from 'react'
// import { API_URL} from '../Navigation/Config'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class AddNew extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    

    this.state = {
        show: false,
        name: '',
        type: '',
        desc: '',
        expire: ''
    };
      }
    
    handleClose() {
    this.setState({ show: false });
    }
    
    handleShow() {
    this.setState({ show: true });
    }

    // handleSubmit = async (event) => { 
    //     event.preventDefault()

        // this.setState({
        //     name: null,
        //     type: null,
        //     desc: null,
        //     expire: null
        // })
    // }

    handleReset = () => {
        this.setState({
            name: '',
            type: '',
            desc: '',
            expire: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [ event.target.name ] : event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <>
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
                            <textarea
                                type='text'
                                name='desc'
                                value={this.state.desc}
                                placeholder='Description'
                                onChange={this.handleChange}
                            />
                            <br/>
                            <div className="Modaltoggle">  
                                {/* <!-- Checkbox toggle --> */}
                                <input type="checkbox" value="selected" id="expiration-date" className="toggleInput" />
                                <label htmlFor="expiration-date" className="toggleLabel">Need to Add an Expiration/Rotate Stock Date?</label> 
                                
                                {/* Content to toggle */}
                                <div className="toggleContent">
                                    <input
                                        type='date'
                                        name='expire'
                                        id="expireDate"
                                        value={this.state.expire}
                                        placeholder='Expiration Date'
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
                </>
            </div>
        )
    }
}

export default AddNew