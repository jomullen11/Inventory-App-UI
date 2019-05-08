import React from 'react'
import FilterLink from '../../Containers/FilterLink'
import { VisibilityFilters } from '../../Actions'

const Footer = () => (
    <div>
        <FilterLink filter={VisibilityFilters.SHOW_HAVE}>Items I Can Add</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_NEED}>Items I Need</FilterLink>
    </div>
)

export default Footer