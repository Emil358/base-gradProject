const nodemon = require('nodemon');
const path = require('path');
const webpack = require('webpack');
const [clientConfig, serverConfig] = require('../webpack.config');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientCompiler = webpack(clientConfig);

hmrServer.use(WebpackDevMiddleware(clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  watchOptions: {
    ignore: /dist/,
  },
  writeToDisk: true,
  stats: 'errors-only'
}));

hmrServer.use(WebpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
  console.log('HMR server succesful started {-1}')
})

const compiler = webpack(serverConfig, (err, stats) => {
  if (err) {
    console.log('Compilation failed {0}', err);
    return;
  }

  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});

compiler.run((err) => {
  if(err) {
    // console.log('Compilation failed {1}: ', err);
  }

  compiler.watch({}, (err) => {
    if(err) {
      // console.log('Compilation failed {2}: ', err);
    }

    console.log('Compilation was succesfull {3}');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  })
});

// let run = require('parallel-webpack').run,
//     configPath = require.resolve('../webpack.config.js'),
//     options = {
//       watch: true,
//       maxRetries: 1,
//       stats: true,
//       maxConcurrentWorkers: 2
//     };

// function notify() {
//   nodemon({
//     script: path.resolve(__dirname, '../dist/server/server.js'),
//     watch: [
//       path.resolve(__dirname, '../dist/server'),
//       path.resolve(__dirname, '../dist/client'),
//     ],
//   });

//   nodemon.on('start', function () {
//     console.log('App has started');
//   }).on('quit', function () {
//     console.log('App has quit');
//     process.exit();
//   }).on('restart', function (files) {
//     console.log('App restarted due to: ', files);
//   });
// }

// run(configPath, options, notify);
