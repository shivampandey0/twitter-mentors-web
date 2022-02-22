import React from "react";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";

function UserActions({ openProfile, deleteUser }) {
  return (
    <div className="user-actions">
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
}

export default UserActions;
