import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineFire } from 'react-icons/ai'
import "./PageTitle.scss"


const PageTitle = () => {
    return (
        <div className="pagetitle d-flex justify-content-between align-items-center">
            <h2>AnaSayfa</h2>
            <Button className="pagetitleBtn" >
                <AiOutlineFire />
            </Button>
        </div>
    )
}

export default PageTitle
