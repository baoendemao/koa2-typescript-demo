### 目录
<!-- TOC -->

- [介绍](#介绍)
- [运行](#运行)
- [访问](#访问)
- [如何使用koa和typescript构建Node应用](#如何使用koa和typescript构建node应用)

<!-- /TOC -->

### 介绍
koa2 + koa-router + typescript + nodemon的一个简单示例。通过访问不同的路由, 输出不同的内容。

此项目的创建流程[点这里](#如何使用koa和typescript构建Node应用)
<br/>


### 运行
* 安装packages
```
npm install

```
* 启动dev环境

```
npm run watch-server
```

* 启动debug环境

```
npm run debug-watch-server

```
### 访问
```
http://localhost:8888/
http://localhost:8888/index
http://localhost:8888/list

```

### 如何使用koa和typescript构建Node应用
* npm 初始化
```
npm init

```
* 添加.gitignore文件
* 添加tsconfig.json
```
  {
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "ES2017",
      "noImplicitAny": true,
      "moduleResolution": "node",
      "sourceMap": true,
      // TS文件编译后会放入到此文件夹内
      "outDir": "dist",
      "baseUrl": ".",
      "paths": {
        "*": [
          "node_modules/*",
          "src/types/*"
        ]
      },
      "lib": [
        "es2017"
      ],
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "skipLibCheck": true
    },
    "include": [
      "src/**/*",
    ],
    "experimentalDecorators": true
  }


```
* 创建koa server
  * 创建src/server.ts文件
  ```
  import Koa from 'koa';
  import Router from 'koa-router';

  const app = new Koa();
  const router = new Router();

  router.get('/*', async (ctx) => {
      ctx.body = 'Hello World!';
  });

  app.use(router.routes());

  app.listen(8888);

  console.log('Server running on port 8888');

  ```
  * 在package.json里添加scripts
  ```
    // tsc命令会根据tsconfig.json中配置的，对ts文件进行编译
    // 并生成到dist目录中
    // 这里到dist目录中去启服务
    "start": "tsc && node dist/server.js"
    
  ```
* 实现热更新
<br/>
当文件发生改变的时候，自动重新编译和重启server, 可以
使用nodemon来监控文件的变化, 使用ts-node来启动项目。
这样，每次修改文件都不需要重启server，实时更新。

```
  // package.json里添加scripts
  "watch-server": "nodemon --watch 'src/**/*' -e ts,tsx --exec 'ts-node' ./src/server.ts"


```

* 使用debug模式
```
  // package.json里添加scripts
  "debug-watch-server": "nodemon --inspect --watch 'src/**/*' -e ts,tsx --exec 'node -r ts-node/register' ./src/server.ts"


```
* 添加全局config文件，存放全局配置
```
  mkdir src/config
  touch src/config/dev.ts
  touch src/config/prod.ts
  touch src/config/index.ts
  touch src/config/default.ts
  
```
