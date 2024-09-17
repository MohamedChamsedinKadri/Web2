import * as http from 'http';

http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('Hello World!');
    res.end();
  }
}).listen(3000);