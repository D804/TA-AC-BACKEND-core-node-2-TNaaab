let path = require('path');
const queryString = require('querystring');
let crFile = __filename;
// console.log(crFile);
let absolutePath = path.join(__dirname, 'app.js');
let relativePath = './index.html';
let AbsolutePathModule = path.join(__dirname, 'index.html');

let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'POST' && req.url === '/') {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(store);
    }
    if (req.method === 'POST' && req.url === '/') {
      let formData = queryString.parse(store);
      res.end(JSON.stringify(formData.captain));
    }
  });
}
server.listen(3000, () => {
  console.log('Running on port 3k');
});

let http = require('http');
let crServer = http.createServer(serverHandler);

function serverHandler(req, res) {
  let format = req.headers['Content-Type'];
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    res.setHeader('Content-Type', 'application/json');
    res.end(store);
  });
}
crServer.listen(9000, () => {
  console.log('Running on port 9k');
});
