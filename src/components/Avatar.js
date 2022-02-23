const Avatar = ({ image, name = "Twitter Mentors" }) => {
  return (
    <div className="flex-row align-cntr px-3 gap-05">
      <img className="avatar avatar-xs" src={image} alt="logo" />
      <p className="fw-bold">{name}</p>
    </div>
  );
};

export default Avatar;
