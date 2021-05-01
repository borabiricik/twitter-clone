import { faCommentDots, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./SidebarProfile.scss"

const SidebarProfile = () => {
    return (

        <div className="row align-items-center py-3 px-2 card-text no-gutters justify-content-between">
            <div className="d-flex ">
                <img className="mr-2" src="" alt="" />
                <div className="d-flex flex-column">
                    <p>asdasd</p>
                    <span>@asdasdasd</span>
                </div>
            </div>

            <button className="more-btn">
            <FontAwesomeIcon icon={faDotCircle} />

            </button>
        </div>
    )
}

export default SidebarProfile
