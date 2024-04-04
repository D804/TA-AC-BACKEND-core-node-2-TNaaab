let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {}
server.listen(5000, () => {
  console.log('Running on port 5k');
});
