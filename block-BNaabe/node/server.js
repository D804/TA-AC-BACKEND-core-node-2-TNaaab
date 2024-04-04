/*
let path = require('path');
const queryString = require('querystring');
let crFile = __filename;
// console.log(crFile);
let absolutePath = path.join(__dirname, 'app.js');
let relativePath = './index.html';
let AbsolutePathModule = path.join(__dirname, 'index.html');
*/
/*
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
*/
/*
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
New Data
let path = require('path');
console.log(__filename);
console.log(__dirname + '/app.js');
console.log(__dirname, './index.html');
let relative = path.join(__dirname, 'index.html');
console.log(relative);
*/
/*
let http = require('http');
let qs = require('querystring');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  let store = '';
  if (req.method === 'POST' && req.url === '/') {
    req.on('data', (chunk) => {
      store += chunk;
    });
    req.on('end', () => {
      res.statusCode = 201;
      let parsed = qs.parse(store);
      res.end(JSON.stringify(parsed));
    });
  }
}
server.listen(3000, () => {
  console.log('Requesting on localhost 3k');
});
*/
/*
let http = require('http');
let qs = require('querystring');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      let parsed = qs.parsed(store);
      res.end(JSON.stringify(parsed));
    }
    if (req.headers['Content-Type'] === 'application/json') {
      res.end(store);
    }
  });
}
server.listen(9000, () => {
  console.log('Running on port 9k');
});
*/
/*
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {

    if (req.headers['Content-Type'] === 'application/json') {
      let JsonData = JSON.parse(store);
res.setHeader('Content-Type', 'text/html');
res.end(`<h1>${JsonData.name}</h1><h2>${JsonData.email}</h2>`)
    }
  });
}
server.listen(9000, () => {
  console.log('Running on port 9k');
});
*/
/*
let http = require('http');
let qs = require('querystring');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      let parsed = qs.parse(store);
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1>${parsed.name}</h1><h2>${parsed.email}</h2>`);
    }
  });
}
server.listen(9000, () => {
  console.log('Running on port 9k');
});
*/
