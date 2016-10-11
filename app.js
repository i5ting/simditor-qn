const Koa = require('koa');
const app = new Koa();

var config = require('./simditor_qn');

console.dir(app);

// require('../index')(app, config);

require('./')(app, config);


// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});


app.listen(4000);
