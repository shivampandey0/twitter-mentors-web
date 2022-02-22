import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";

const Tweets = ({ id, username }) => {
  const [tweets, setTweets] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     await fetch(`/.netlify/functions/tweets-fetch?user_id=${id}`)
  //       .then((x) => x.json())
  //       .then(handleTweets);
  //   }
  //   getData();
  // }, [id]);

  useEffect(() => {
    fetch(`/.netlify/functions/tweets-fetch?user_id=${id}`)
      .then((x) => x.json())
      .then(handleTweets);
  }, [id]);

  const handleTweets = (data) => {
    let tweets = [];

    data.msg.data.forEach((item) => {
      if (!Array.isArray(item.referenced_tweets)) {
        tweets = [...tweets, { ...item, type: "tweet" }];
      }
    });

    data.msg.includes.tweets.forEach(
      (item) => (tweets = [...tweets, { ...item, type: "retweet" }])
    );
    setTweets(tweets);
  };

  const openTweet = (tweetID) =>
    window.open(`https://twitter.com/${username}/status/${tweetID}`, "_blank");

  return (
    <div className="tweets-section">
      {tweets ? (
        tweets.map((tweet) => {
          return (
            <div
              className="tweet-box badge-wrapper"
              key={tweet.id}
              onClick={() => openTweet(tweet.id)}
            >
              <p className="txt-sm">{tweet.text}</p>
              <span class="badge badge-info">
                {tweet.type === "retweet" ? (
                  <i class="fas fa-retweet"></i>
                ) : (
                  <i class="fab fa-twitter"></i>
                )}
              </span>
            </div>
          );
        })
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Tweets;
