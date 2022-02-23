const fetch = require("node-fetch");

const handler = async (event) => {
  var usernames;
  if (event.queryStringParameters !== "") {
    usernames = event.queryStringParameters["usernames"];
  }

  var url = `https://api.twitter.com/2/users/by?user.fields=profile_image_url&usernames=${usernames}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: process.env.TWITTER_BEARER_TOKEN,
      },
    });

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
