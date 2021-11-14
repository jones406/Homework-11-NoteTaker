const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const htmlRoutes = require('./routes/HTMLroutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// localhost:3001
app.use('/', htmlRoutes);
// localhost:3001/api
app.use('/api', apiRoutes);

// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`);
// });

app.listen(process.env.PORT || 5000);