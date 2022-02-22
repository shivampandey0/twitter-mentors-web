import React from "react";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";

function UserActions({ openProfile, deleteUser }) {
  return (
    <div className="user__actions">
      <FaExternalLinkAlt
        cursor={"pointer"}
        color={"grey"}
        onClick={openProfile}
      />
      <FaTrashAlt cursor={"pointer"} color={"red"} onClick={deleteUser} />
    </div>
  );
}

export default UserActions;
