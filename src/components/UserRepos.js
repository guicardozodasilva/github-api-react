import React from 'react';

const UserRepos = ({ repos, reposCount }) => {
  var currentyRepos = repos.map(function (repo, key) {
    return (
      <div key={key} className="thumbnail thumbnail-custom">
        <div className="caption">
          <div className="text-custom">
            <h3>
              {repo.name}
              <span className="badge badge-custom">
                {repo.stargazers_count} STARS
              </span>
            </h3>
          </div>
          <p className="description-custom">{repo.description}</p>
          <p>
            <a
              href={repo.html_url}
              className="btn btn-primary btn-custom"
              target="_blank"
              role="button"
            >
              Repository
            </a>
            <a
              href={repo.html_url + '/issues'}
              target="_blank"
              className="btn btn-default btn-custom-2"
              role="button"
            >
              Issues ({repo.open_issues})
            </a>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-custom">{reposCount} repositories</h2>
      {currentyRepos}
    </div>
  );
};

export default UserRepos;
