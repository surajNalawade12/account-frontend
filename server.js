const express = require('express');
const app = express();
const path = require('path');
console.log('directory => ', __dirname);
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8000);

app.get('/*', function(req, res) {
    console.log('full path => ', path.join(__dirname + '/index.html'));
  res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('console listening');