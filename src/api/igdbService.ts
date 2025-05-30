export async function fetchFromIGDB(query: string) {
  const response = await fetch('http://localhost:4000/api/igdb', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: query
  });

  if (!response.ok) {
    throw new Error('Proxy request failed');
  }

  return await response.json();
}