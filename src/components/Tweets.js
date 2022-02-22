import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";

function Tweets({ id, username }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(`/.netlify/functions/tweets-fetch?user_id=${id}`)
        .then((x) => x.json())
        .then(({ msg }) => {
          setTweets(msg.data);
        });
    }
    getData();
  }, [id]);

  function openTweet(tweetID) {
    window.open(`https://twitter.com/${username}/status/${tweetID}`, "_blank");
  }

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
                {tweet.text.startsWith("RT") ? (
                  <i class="fas fa-retweet"></i>
                ) : tweet.text.startsWith("@") ? (
                  <i class="fas fa-reply"></i>
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
}

export default Tweets;
