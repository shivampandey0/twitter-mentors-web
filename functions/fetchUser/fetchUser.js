const fetch = require('node-fetch')

const handler = async event => {
  var usernames;
  if (event.queryStringParameters !== '') {
    usernames = event.queryStringParameters['usernames']
  }

  var url = `https://api.twitter.com/2/users/by?user.fields=profile_image_url&usernames=${usernames}`

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: process.env.TWITTER_BEARER_TOKEN,
      },
    })
    console.log(response);

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
