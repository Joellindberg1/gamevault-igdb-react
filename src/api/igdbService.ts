

const CLIENT_ID = "x36y7vjpuliz9wln5tovdqvj1lnmkq";
const CLIENT_SECRET = "uwnomwp63mf7la2gykje7a620011by";

let accessToken = ''; // Sparar token i minnet

async function fetchAccessToken(): Promise<string> {
  const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
  });

  const data = await response.json();
  return data.access_token;
}


export async function fetchFromIGDB(endpoint: string, query: string) {
  if (!accessToken) {
    accessToken = await fetchAccessToken();
  }

  const response = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: 'POST',
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
    body: query
  });

  if (!response.ok) {
    throw new Error('IGDB request failed');
  }

  return await response.json();
}
