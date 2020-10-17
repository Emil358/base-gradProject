const nodemon = require('nodemon');
const path = require('path');

let run = require('parallel-webpack').run,
    configPath = require.resolve('../webpack.config.js'),
    options = {
      watch: true,
      maxRetries: 1,
      stats: true,
      maxConcurrentWorkers: 2
    };

function notify() {
  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  });

  nodemon.on('start', function () {
    console.log('App has started');
  }).on('quit', function () {
    console.log('App has quit');
    process.exit();
  }).on('restart', function (files) {
    console.log('App restarted due to: ', files);
  });
}

run(configPath, options, notify);
