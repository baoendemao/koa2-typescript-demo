"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const config_1 = __importDefault(require("./config"));
const app = new koa_1.default();
const router = new koa_router_1.default();
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
app.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
//# sourceMappingURL=server.js.map