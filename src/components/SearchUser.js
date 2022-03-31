import React from 'react';
import {
  fetchUserData,
  fetchReposData,
  fetchStarredData,
} from '../services/Api';

const SearchUser = ({
  setUser,
  setRepos,
  setStarred,
  setDisplay,
  setReposCount,
  setStarredCount,
}) => {
  const [username, setUsername] = React.useState('');

  function saveUsername(event) {
    setUsername(event.target.value);
  }

  function userScreen(event) {
    event.preventDefault();

    const userData = fetchUserData(username);

    userData.then((response) => {
      if (response.message === 'Not Found') {
        setUser(null);
        setDisplay(4);
      } else {
        setUser(response);
        setDisplay(1);
      }
    });
  }

  function reposScreen(event) {
    event.preventDefault();

    const reposData = fetchReposData(username);

    reposData.then((response) => {
      setReposCount(response.length);
      if (response.message === 'Not Found') {
        setRepos([]);
        setDisplay(4);
      } else {
        setRepos(response);
        setDisplay(2);
      }
    });
  }

  function starredScreen(event) {
    event.preventDefault();

    const starredData = fetchStarredData(username);

    starredData.then((response) => {
      setStarredCount(response.length);
      if (response.message === 'Not Found') {
        setStarred([]);
        setDisplay(4);
      } else {
        setStarred(response);
        setDisplay(3);
      }
    });
  }

  return (
    <div className="jumbotron jumbotron-custom">
      <div className="title-custom">
        <h1>GitHub Search</h1>
      </div>
      <div className="row">
        <form>
          <div className="form-group">
            <div className="subtitle-custom">
              <label>Username</label>
            </div>
            <input
              type="text"
              className="form-control form-control-custom"
              placeholder="guicardozodasilva"
              onChange={saveUsername}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-custom"
            onClick={userScreen}
          >
            Search user
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-custom"
            onClick={reposScreen}
          >
            Repositories
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-custom"
            onClick={starredScreen}
          >
            Starred
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchUser;
