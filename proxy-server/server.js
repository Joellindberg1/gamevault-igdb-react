const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let accessToken = '';

async function getAccessToken() {
  const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
  });
  const data = await response.json();
  accessToken = data.access_token;
}

app.post('/api/igdb', async (req, res) => {
  if (!accessToken) await getAccessToken();

  const igdbResponse = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
    body: req.body.query
  });

  const data = await igdbResponse.json();
  res.json(data);
});

app.listen(PORT, () => console.log(`Proxy-server running on http://localhost:${PORT}`));
