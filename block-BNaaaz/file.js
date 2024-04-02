let http = require('http');
let fs = require('fs');
let server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  fs.createReadStream('./readme.txt').pipe(res);
}
server.listen(5000, () => {
  console.log('Running on port 5000');
});
