import React from 'react';

const UserStarred = ({ starred, starredCount }) => {
  var currentyStarred = starred.map(function (star, key) {
    return (
      <div key={key} className="thumbnail thumbnail-custom">
        <div className="caption">
          <div className="text-custom">
            <h3>{star.name}</h3>
          </div>
          <p className="description-custom">{star.description}</p>
          <p>
            <a
              href={star.html_url}
              className="btn btn-primary btn-custom"
              target="_blank"
              role="button"
            >
              Starred repository
            </a>
            <a
              href={star.html_url + '/issues'}
              target="_blank"
              className="btn btn-default btn-custom-2"
              role="button"
            >
              Issues ({star.open_issues})
            </a>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-custom">{starredCount} starred repositories</h2>
      {currentyStarred}
    </div>
  );
};

export default UserStarred;
