// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import config from './webpack.dev.config';
import hapi from 'hapi';
import path from 'path';
import inert from 'inert';
import vision from 'vision';
// 热加载

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {
//     colors: true
//  }
// }).listen(8080, '127.0.0.1', function (err) {
//   if (err) { console.log(err); }
//   console.log('Webpack listening at 8080');
// });
// 启动服务器并配置静态资源路径
const server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, './public')
      }
    }
  }});
server.connection({ port: 3000 });
// 注册页面渲染
server.register([inert, vision], () => {
  if (!process.env.DEBUG) {
    server.start(() => {
      console.log(`Server started at:  ${server.info.uri}`);
    });
  }
});
// 配置页面文件路径
server.views({
  path: path.join(__dirname, './views'),
  engines: {
           ejs: {
             module: require('ejs')
           }
        },
  isCached: false
});
// 路由单页应用
server.route([{
  method:'get',
  path:'/favicon.ico',
  handler: {file: './favicon.ico'}
},{
  method: 'GET',
  path: '/public/{p*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true
    }
  }
},{
  method:'get',
  path:'/{p*}',
  handler: function(request,reply){
    return reply.view('index',{title: 'candy'});
  }
}]);
