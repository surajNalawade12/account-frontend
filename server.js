const express = require('express');
const app = express();
const path = require('path');
console.log('directory => ', __dirname);
app.use(express.static('/dist'));

app.listen(process.env.PORT || 8000);

app.get('/*', function(req, res) {
    console.log('full path => ', path.join('index.html'));
  res.sendFile(path.join('index.html'));
});

console.log('console listening');