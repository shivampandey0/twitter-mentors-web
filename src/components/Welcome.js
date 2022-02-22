import React from "react";
import logo from "../assets/twitter.svg";

function Welcome() {
  return (
    <div className="welcome">
      <img className="img-responsive  avatar-lg" src={logo} alt="logo" />
      <h3 className="fw-bold">Add Users to see their recent Tweets</h3>
    </div>
  );
}

export default Welcome;
