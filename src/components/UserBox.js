const UserBox = ({ user, setUserSelected }) => {
  return (
    <div className="user-box pointer" onClick={() => setUserSelected(user)}>
      <img className="avatar" src={user.profile_image_url} alt={user.name} />
      <div className="user-info">
        <p className="fw-bold">{user.name}</p>
        <span>Tap to see recent tweets</span>
      </div>
    </div>
  );
};

export default UserBox;
