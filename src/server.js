const express = require('express');

const app = express();
const port = Number(process.env.PORT || 8080);

app.get('/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    service: 'evaluacion-api',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`evaluacion-api listening on port ${port}`);
});
