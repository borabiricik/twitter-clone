import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FormControl } from 'react-bootstrap'
import "./Search.scss"

const Search = () => {
    return (
        <>
        <FormControl className="searchBar position-relative" placeholder="Arama Yap..." />
        <span className="searchIconWrapper" >
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        </span>
        </>

    )
}

export default Search
