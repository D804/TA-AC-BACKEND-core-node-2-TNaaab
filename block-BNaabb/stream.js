let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    console.log(store);
  });
  res.write(store);
  res.end();
}
server.listen(3456, () => {
  console.log('Listening on port 3456');
});
