async function getEvents(userName) {
  
  const githubUrl = `https://api.github.com/users/${userName}/events`;
  
  const proxy = 'https://api.allorigins.win/raw?url=';

  const response = await fetch(proxy + encodeURIComponent(githubUrl));

  if (!response.ok) {
    throw new Error("Erro ao buscar eventos");
  }

  return await response.json();
}

export { getEvents };
