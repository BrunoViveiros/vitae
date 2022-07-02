import "./styles.scss";

export const ProfilePhoto = ({ className }) => {
  return (
    <div className={`${className} profile-photo`}>
      <img
        className="profile-photo__image"
        src="https://i.pravatar.cc/300"
        alt="User avatar"
      />
    </div>
  );
};
