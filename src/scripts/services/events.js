async function getEvents(userName) {
  const githubUrl = `https://api.github.com/users/${userName}/events`;
  const proxy = 'https://api.allorigins.win/raw?url=';

  const response = await fetch(proxy + encodeURIComponent(githubUrl));

  if (!response.ok) {
    throw new Error('Erro ao buscar eventos');
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}

export { getEvents };
