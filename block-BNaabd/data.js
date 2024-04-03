let http = require('http');
let queryString = require('querystring');
let server = http.createServer(serverHandler);
function serverHandler(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'POST' && req.url === '/json') {
      res.setHeader('Content-Type', 'application/json');
      res.end(store);
    }
    if (req.method === 'POST' && req.url === '/form') {
      let parseData = queryString.parse(store);
      res.end(JSON.stringify(parseData));
    }
  });
}
server.listen(7000, () => {
  console.log('Running on port 7k');
});
