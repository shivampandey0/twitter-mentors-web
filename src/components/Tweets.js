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
    <div className="tweets__section">
      {tweets ? (
        tweets.map((tweet) => {
          return (
            <div
              className="tweet__box"
              key={tweet.id}
              onClick={() => openTweet(tweet.id)}
            >
              <p>{tweet.text}</p>
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
