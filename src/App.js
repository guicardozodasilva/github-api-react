import React from 'react';
import SearchUser from './components/SearchUser';
import UserInfo from './components/UserInfo';
import UserRepos from './components/UserRepos';
import UserStarred from './components/UserStarred';

function App() {
  const [user, setUser] = React.useState(null);
  const [repos, setRepos] = React.useState([]);
  const [starred, setStarred] = React.useState([]);
  const [display, setDisplay] = React.useState(0);
  const [reposCount, setReposCount] = React.useState(0);
  const [starredCount, setStarredCount] = React.useState(0);

  let screen;

  if (display === 1) {
    screen = <UserInfo user={user} />;
  } else if (display === 2) {
    screen = <UserRepos repos={repos} reposCount={reposCount} />;
  } else if (display === 3) {
    screen = <UserStarred starred={starred} starredCount={starredCount} />;
  } else if (display === 4) {
    screen = (
      <div className="thumbnail thumbnail-custom">
        <h2 className="text-custom">User not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <SearchUser
        setUser={setUser}
        setRepos={setRepos}
        setStarred={setStarred}
        setDisplay={setDisplay}
        setReposCount={setReposCount}
        setStarredCount={setStarredCount}
      />
      {screen}
    </div>
  );
}

export default App;
