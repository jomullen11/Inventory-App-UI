import { connect } from 'react-redux'
import { toggleItem, VisibilityFilters, removeItem } from '../Actions'
import ItemList from '../Components/ItemList'

const getVisibleItems = ( items, filter ) => {
    switch(filter) {
        case VisibilityFilters.SHOW_HAVE:
            return items.filter(t => t.have)
        case VisibilityFilters.SHOW_NEED:
            return items.filter(t => !t.have)
        case VisibilityFilters.SHOW_ALL:
            return items
        default:
            throw new Error('Unkown Filter' + filter)
    }
}

const mapStateToProps = state => ({
    items: getVisibleItems(state.items, state.visibilityFilter)
})

const mapDispatchStateToProps = (dispatch) => ({
    toggleItem: id => dispatch(toggleItem(id))
    // removeItem: id => dispatch(removeItem(id))
})

const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchStateToProps
)(ItemList)

export default VisibleItemList