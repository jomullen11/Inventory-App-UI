import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions'
import Link from '../Components/Link'

const mapStateToProps = ( state, ownProps ) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchStateToProps = ( dispatch, ownProps ) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchStateToProps
)(Link)

export default FilterLink