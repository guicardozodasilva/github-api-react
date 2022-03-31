import React from 'react';

const UserInfo = ({ user }) => {
  var userInfo = user ? (
    <div className="thumbnail thumbnail-custom">
      <div className="subtitle-custom">
        <img
          className="img-circle img-custom"
          src={user.avatar_url}
          alt="avatar"
        />
        <h2>{user.name}</h2>
        <h3>{user.bio}</h3>
        <p>{user.login}</p>
        <p>
          Followers: {user.followers} / Following: {user.following}
        </p>
        <p>
          <a
            className="btn btn-primary btn-custom"
            href={user.html_url}
            target="_blank"
            role="button"
          >
            View details
          </a>
        </p>
      </div>
    </div>
  ) : null;

  return userInfo;
};

export default UserInfo;
