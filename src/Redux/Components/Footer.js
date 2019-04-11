import React from 'react'
import FilterLink from '../Containers/FilterLink'
import { VisibilityFilters } from '../Actions'

const Footer = () => (
    <div>
        <FilterLink filter={VisibilityFilters.SHOW_HAVE}>My Items</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_NEED}>Items I Need</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All Items</FilterLink>
    </div>
)

export default Footer