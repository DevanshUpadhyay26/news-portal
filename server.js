const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname) });
});

app.get('/api', async (req, res) => {
  console.log(req.query);
  let url = 'https://newsapi.org/v2/everything?' + req.originalUrl.split('?')[1];
  let response = await axios(url);
  let data = response.data;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
