const express = require('express');
const app = express;

//environmental var. for port
const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`listening on port ${port}`));
