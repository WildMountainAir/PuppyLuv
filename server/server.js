const express = require('express');
const app = express();
const PORT = 8000;
// const queries = require('../database/queries');

app.use(express.static('../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`🛥  Server is running and listening on port ${PORT} 🛥`));
