const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS is the best Cloud Solution and BJ the best SysAdmin!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
