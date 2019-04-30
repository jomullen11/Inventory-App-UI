import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, handleDelete, have, text }) => (
    <li
        style = {{
            color: have ? 'black' : 'red'
        }}
    >
        {text}
        <button
            type='button'
            onClick={onClick}
            style = {{
                display: have ? 'none' : true
            }}
        >
        Have
        </button>
        <button
            type = 'button'
            onClick={handleDelete}
        >Remove</button>
    </li>
)

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    have: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
    
}

export default Item