import Koa from 'koa';
import Router from 'koa-router';
import config from './config';

const app = new Koa();
const router = new Router();

router.get('/index', async (ctx) => {
    ctx.body = 'index';
});

router.get('/list', async (ctx) => {
    ctx.body = 'list';
});

router.get('/*', async (ctx) => {
    ctx.body = 'any';
});

app.use(router.routes());

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});