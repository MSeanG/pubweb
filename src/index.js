//import express from 'express';
//
//let app = require('./server').default;
//
//if (module.hot) {
//  module.hot.accept('./server', function() {
//    console.log('🔁  HMR Reloading `./server`...');
//    try {
//      app = require('./server').default;
//    } catch (error) {
//      console.error(error);
//    }
//  });
//  console.info('✅  Server-side HMR Enabled!');
//}
//
//const port = process.env.PORT || 3000;
//
//export default express()
//  .use((req, res) => app.handle(req, res))
//  .listen(port, function(err) {
//    if (err) {
//      console.error(err);
//      return;
//    }
//    console.log(`> Started on port ${port}`);
//  });

import app from './server'
export let handler

if (process.env.NODE_ENV === 'production') {
  const awsServerlessExpress = require('aws-serverless-express')

  const binaryMimeTypes = [
    'application/octet-stream',
    'font/eot',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
  ]
  const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

  handler = (event, context, callback) => {
    awsServerlessExpress.proxy(server, event, context)
  }
} else {
  const http = require('http')

  const server = http.createServer(app)

  let currentApp = app

  server.listen(process.env.PORT || 3000, error => {
    if (error) {
      console.log(error)
    }

    console.log('🚀 started')
  })

  if (module.hot) {
    console.log('✅  Server-side HMR Enabled!')

    module.hot.accept('./server', () => {
      console.log('🔁  HMR Reloading `./server`...')
      server.removeListener('request', currentApp)
      const newApp = require('./server').default
      server.on('request', newApp)
      currentApp = newApp
    })
  }
}
