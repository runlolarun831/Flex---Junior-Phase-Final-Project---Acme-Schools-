const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');



app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


db.syncAndSeed();

app.get('/api/schools', (req, res, next) => res.send(db.schools));

//environmental var. for port
const port = process.env.PORT || 3000;

// verify that server is working
app.listen(port, () => console.log(`listening on port ${port}`));
