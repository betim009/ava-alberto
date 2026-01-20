const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/', routes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
