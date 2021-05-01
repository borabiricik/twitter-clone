import React from 'react'
import { Card } from 'react-bootstrap'
import "./Tweet.scss"
import borapic from "../../../../users/img/bora.jpeg"
import { faEllipsisH, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'


const Tweet = (props) => {
    return (
        <Card className="tweetCard d-flex position-relative">
            <img src={borapic} className="tweetPPic" alt="" />
            <Card.Link className="d-flex flex-column align-items-start w-100">

                <Card.Text >
                    <span>{props.tweet.user.name}</span>
                    <span className="tweetUsernameText" >
                        @{props.tweet.user.username}
                    </span>

                    <span className="tweetDateAdded" >

                        {
                            props.tweet.dateAdded
                        }
                    </span>
                    <FontAwesomeIcon className="tweetMoreIcon" icon={faEllipsisH} />

                </Card.Text>
                <Card.Text className="tweetText" >
                    {props.tweet.text}
                </Card.Text>
                <Card.Footer className="d-flex align-items-center w-75 my-1 justify-content-between">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="tweetFooterBtn" icon={faComment} />
                        <span className="tweetFooterBtnText" >15</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="tweetFooterBtnRT" icon={faRetweet} />
                        <span className="tweetFooterBtnText" >15</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="tweetFooterBtnLike" icon={faHeart} />
                        <span className="tweetFooterBtnText" >15</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="tweetFooterBtn" icon={faShare} />
                        <span className="tweetFooterBtnText" >15</span>
                    </div>

                </Card.Footer>
            </Card.Link>



        </Card>
    )
}

export default Tweet
