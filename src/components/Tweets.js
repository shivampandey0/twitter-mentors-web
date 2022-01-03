import React, { useEffect, useState } from 'react'
import Welcome from './Welcome';

function Tweets({ userID }) {

    const [tweets, setTweets] = useState([])



    useEffect(() => {
        async function getData() {
            setTweets([])
            await fetch(`/.netlify/functions/tweets-fetch?user_id=${userID}`)
                .then((x) => x.json())
                .then(({ msg }) => {
                    console.log(msg.data);
                    setTweets(msg.data)

                })
        }

        getData()

    }, [userID])


    return (
        <div className='tweets__section'>
            {
                tweets ? (tweets.map(tweet => {
                    return (
                        <div className='tweet__box' key={tweet.id}>
                            <p>{tweet.text}</p>
                        </div>
                    )
                })) : <Welcome />
            }

        </div>
    )
}

export default Tweets
