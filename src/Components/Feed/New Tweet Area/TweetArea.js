import React from 'react'
import "./TweetArea.scss"
import profileImg from "./img/UmBIlzdF_400x400.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faImages, faSmile } from '@fortawesome/free-regular-svg-icons'
import TweetBtn from '../../TweetBtn/TweetBtn'
import PageTitle from "../PageTitle/PageTitle"

const TweetArea = () => {
    return (
        <>
            <PageTitle />
            <div className="px-3 pt-4 d-flex align-items-start tweetarea">
                <img src={profileImg} alt="" />
                <div className="d-flex flex-column textareaSection">
                    <textarea rows="1" cols="500" placeholder="Neler oluyor?" name="" id=""></textarea>
                    <div className="row px-3 justify-content-between align-items-center pt-2">
                        <div className="col-1 d-flex align-items-center px-3 py-2">
                            <FontAwesomeIcon className="tweetFlexBtn" icon={faImages} />
                            <FontAwesomeIcon className="tweetFlexBtn" icon={faAddressCard} />
                            <FontAwesomeIcon className="tweetFlexBtn" icon={faChartLine} />
                            <FontAwesomeIcon className="tweetFlexBtn" icon={faSmile} />
                            <FontAwesomeIcon className="tweetFlexBtn" icon={faImages} />
                        </div>
                        <TweetBtn  type={"tweeterBtnTweetArea"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TweetArea
