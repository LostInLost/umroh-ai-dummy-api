const jsonServer = require('json-server')
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data_dummy_paket_umroh.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
