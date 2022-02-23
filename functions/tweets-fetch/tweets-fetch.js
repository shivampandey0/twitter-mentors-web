const fetch = require("node-fetch");

const handler = async (event) => {
  var userID;
  if (event.queryStringParameters !== "") {
    userID = event.queryStringParameters["user_id"];
  }

  var url = `https://api.twitter.com/2/users/${userID}/tweets?expansions=referenced_tweets.id&exclude=replies`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: process.env.TWITTER_BEARER_TOKEN,
      },
    });
    console.log(response);

    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
