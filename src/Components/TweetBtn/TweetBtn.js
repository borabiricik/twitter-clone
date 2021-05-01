import React from 'react'
import { Button } from 'react-bootstrap'
import "./TweetBtn.scss"

const tweetButtonClick = (e) => {
    e.preventDefault();
}

const TweetBtn = (props) => {
    return (
        <Button onClick={tweetButtonClick} href="!#" className={`${props.type} d-none d-md-block`}>
                    Tweetle
        </Button>
    )
}

export default TweetBtn
