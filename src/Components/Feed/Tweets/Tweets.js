import React from 'react'
import Tweet from './Tweet/Tweet'
import "./Tweets.scss"
import tweets from "../../../users/tweets"

const Tweets = () => {

    


    return (
        <>
            {
                tweets.map((tweet)=>{
                    return(
                        <Tweet key={tweet.user.username} tweet={tweet} />
                    )
                })
            }
        </>
    )
}

export default Tweets
