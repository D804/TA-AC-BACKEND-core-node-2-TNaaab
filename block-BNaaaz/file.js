let http = require('http');
let path = require('path');
let server = http.createServer(handleServer);
const read = createReadStream(__dirname, 'readme.txt');
function handleServer(req, res) {
  res.end(read);
}
server.listen(5000, () => {
  console.log('Running on port 5000');
});
