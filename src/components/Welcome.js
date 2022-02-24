import React from "react";
import logo from "../assets/twitter.svg";

const Welcome = ({ msg = "Add Users to see their recent Tweets" }) => {
  return (
    <div className="welcome">
      <img className="img-responsive  avatar-lg" src={logo} alt="logo" />
      <h3 className="fw-bold">{msg}</h3>
    </div>
  );
};

export default Welcome;
