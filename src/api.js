const path = require('path');
const fs = require('fs');
const http = require('http');
const koa = require('koa');
const parse = require('koa-body');
const router = require('koa-router');
const cors = require('koa-cors');
const send = require('koa-send');
const config = require('config');

const app = module.exports = new koa();
const api = router();

require('./autoit/routes')(api);

app.use(cors({ origin: '*' }));

app.use(parse());

app.use(api.routes());

const http_server = http.createServer(app.callback());
http_server.listen(config.port);

// log message
console.log(`listening on port ${config.port}.`);
