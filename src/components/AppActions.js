import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const AppActions = ({ openGithub, openTwitter }) => {
  return (
    <div className="appbar-actions gap-1">
      <FaGithub
        cursor={"pointer"}
        color={"var(--primary-dark)"}
        onClick={openGithub}
      />
      <FaTwitter
        cursor={"pointer"}
        color={"var(--primary-dark)"}
        onClick={openTwitter}
      />
    </div>
  );
};

export default AppActions;
