import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './proxy-server/.env' });
console.log('Loaded from .env:', process.env.CLIENT_ID, process.env.CLIENT_SECRET);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.text());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let accessToken = '';
let tokenTimestamp = 0;

async function getAccessToken() {
  const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
  });
  const data = await response.json();
  accessToken = data.access_token;
  tokenTimestamp = Date.now();
}

function isTokenExpired() {
  // 3600s = 1 timme
  return Date.now() - tokenTimestamp > 3600 * 1000;
}

app.post('/api/igdb', async (req, res) => {
  if (!accessToken || isTokenExpired()) {
    await getAccessToken();
  }
 

  const igdbResponse = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
      
    },
    
    body: req.body
  });
  
  const data = await igdbResponse.json();
  res.json(data);
});

app.listen(PORT, () => console.log(`Proxy-server running on http://localhost:${PORT}`));
