let http = require('http');
let queryString = require('querystring');
let server = http.createServer(serverHandler);
function serverHandler(req, res) {
  let format = req.headers['content-type'];

  let store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    if (format === 'application/json') {
      let parse = JSON.parse(store);
      res.end(store);
    }
    if (format === 'application/x-www-form-urlencoded') {
      let parseData = queryString.parse(store);
      res.end(JSON.stringify(parseData));
    }
  });
}
server.listen(7000, () => {
  console.log('Running on port 7k');
});
