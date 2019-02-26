const server = require('./server.js');

let port = 3031;

server.listen(port, function () {
  console.log('listening on port', port);
});
