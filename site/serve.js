/* Local preview that behaves like Vercel: clean URLs, trailing slashes, and dist/404.html for
   anything unknown. No dependencies.  node site/serve.js  →  http://localhost:8767 */
const http = require('http'), fs = require('fs'), path = require('path');
const DIST = path.join(__dirname, 'dist'), PORT = process.env.PORT || 8767;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.json': 'application/json', '.txt': 'text/plain' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(DIST, p);
  if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { file = path.join(DIST, '404.html'); res.statusCode = 404; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log('YBMA site preview: http://localhost:' + PORT));
