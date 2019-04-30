import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items, toggleItem, removeItem }) => (
    
    <ul>
        {items.map(item => (
            <Item key={item.id} item={item} {...item} onClick={() => toggleItem(item.id)} handleDelete={() => removeItem(item.id)} 
            />
        ))}
    </ul>
)

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            have: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default ItemList