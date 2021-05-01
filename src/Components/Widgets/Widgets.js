import React from 'react'
import Search from './SearchBar/Search'
import TopTen from './TopTen/TopTen'
import WhoToFollow from './WhoToFollow/WhoToFollow'
import "./Widgets.scss"


const Widgets = () => {
    return (
        <div className="d-none d-md-flex flex-column col-md-3 widgets mt-1 sticky-top">
            <Search />
            <TopTen />
            <WhoToFollow />
        </div>
    )
}

export default Widgets
