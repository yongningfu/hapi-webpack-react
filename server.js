import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.dev.config';
import hapi from 'hapi';
import path from 'path';
import inert from 'inert';
import vision from 'vision';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
 }
}).listen(8080, '127.0.0.1', function (err) {
  if (err) { console.log(err); }
  console.log('Webpack listening at 8080');
});


const server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, './build')
      }
    }
  }});
server.connection({ port: 3000 });

server.register([inert, vision], () => {
  if (!process.env.DEBUG) {
    server.start(() => {
      console.log(`Server started at:  ${server.info.uri}`);
    });
  }
});
server.views({
  path: path.join(__dirname, './views'),
  engines: {
           ejs: {
             module: require('ejs')
           }
        },
  isCached: false
});
server.route({
  method:'get',
  path:'/{p*}',
  handler: function(request,reply){
    return reply.view('index');
  }
});
