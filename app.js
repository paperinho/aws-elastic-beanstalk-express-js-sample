const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('AWS is the best Cloud Solution and BJ the best SysAdmin!'));
=======
app.get('/', (req, res) => res.send('AWS is the best Cloud Solution !'));
>>>>>>> a82db079860d9f8f231861c7ae8721262133c8fc

app.listen(port);
console.log(`App running on http://localhost:${port}`);
