## hapi+webpack+react

### 目录结构

```
bash/
  app/
    modules/
      About.js
      ...
      ...
    mixins/
      main.css
    routes/
      index.js
    main.js(webpack入口文件)
  server.js(服务器启动文件)
  build/
    bundle.js(webpack打包生成的)
    main.chunk.js(webpack打包生成的)
  views/
    index.ejs
  node_modules/
  .babelrc
  package.JSON
  webpack.dev.config.js(开发环境下的配置文件)
  webpack.config.js(生产环境下的配置文件)
```
