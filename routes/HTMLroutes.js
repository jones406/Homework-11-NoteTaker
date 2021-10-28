const router = require('express').Router(); //import router (built into express)
const path = require("path");

//HTML ROUTE: get * should return the index.html file
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//HTML ROUTE: get /notes should return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

module.exports = router;