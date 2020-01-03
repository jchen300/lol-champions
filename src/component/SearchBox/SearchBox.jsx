import React from 'react'
import PropTypes from 'prop-types'
import { prototype } from 'events';
import './SearchBox.css';

function SearchBox({placeholder, handleChange}) {
    return (
        <input className='SearchBox'
            type='search' 
            placeholder= {placeholder}
            onChange= {handleChange}
        />
    )
}

SearchBox.propTypes = {
    placeholder : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
}

export default SearchBox

