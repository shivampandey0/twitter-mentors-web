const openProfile = (username) =>
  window.open(`https://twitter.com/${username}`, "_blank");

const openGithub = () =>
  window.open(`https://github.com/shivampandey0/twitter-mentors-web`, "_blank");

const openTwitter = (username) =>
  window.open(`https://twitter.com/ErShivamPandey`, "_blank");

export { openProfile, openGithub, openTwitter };
