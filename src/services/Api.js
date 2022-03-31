export async function fetchUserData(username) {
  const response = await fetch('https://api.github.com/users/' + username);
  const data = await response.json();
  return data;
}

export async function fetchReposData(username) {
  const response = await fetch(
    'https://api.github.com/users/' + username + '/repos',
  );
  const data = await response.json();
  return data;
}

export async function fetchStarredData(username) {
  const response = await fetch(
    'https://api.github.com/users/' + username + '/starred',
  );
  const data = await response.json();
  return data;
}
