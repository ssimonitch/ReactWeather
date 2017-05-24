// use node to get access to express API
let express = require('express');

// create new app
let app = express();
const PORT = process.env.PORT || 3000;

// check to see if call is http, if not redirect
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto' === 'http']) {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// app.use to tell which folder name to serve
app.use(express.static('public'));

// start server with app.listen and specify port & function
app.listen(PORT, function() {
  console.log(`Express server is up on port ${PORT}`);
});
