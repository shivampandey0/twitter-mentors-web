import React from "react";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";

const UserActions = ({ openProfile, deleteUser }) => {
  return (
    <div className="appbar-actions">
      <FaExternalLinkAlt
        cursor={"pointer"}
        color={"var(--primary)"}
        onClick={openProfile}
      />
      <FaTrashAlt
        cursor={"pointer"}
        color={"var(--primary-dark)"}
        onClick={deleteUser}
      />
    </div>
  );
};

export default UserActions;
