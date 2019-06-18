const express = require('express')
const PORT = process.env.PORT || 8080;
const NAME = process.env.NAME || 'MissingNo';


const winston = require('winston');
// Imports the Google Cloud client library for Winston
const lw = require('@google-cloud/logging-winston');

// const loggingWinston = new LoggingWinston({
//   projectId: 'apac-sandbox',
//   keyFilename: './credentials/apac-sandbox-app-enginge-default-service-account.json',
// });

async function main() {
  const {logger, mw} = await lw.express.middleware();
  const app = express();

  // Install the logging middleware. This ensures that a Winston-style `log`
  // function is available on the `request` object. Attach this as one of the
  // earliest middleware to make sure that the log function is available in all
  // subsequent middleware and routes.
  app.use(mw);

  app.get('/log', (req, res) => {
    console.log('This should be a standard log')
    res.send(`Logging`);
  });

  app.get('/error', (req, res) => {
    console.error('This should be caught by an error handler')
    res.send(`Erroring out`)
  });

  app.get('/winston', (req, res) => {
    // Writes some log entries
    logger.error('warp nacelles offline');
    logger.info('shields at 99%');

    res.send('Winston')
  })

  app.get('/', (req, res) => res.send(`Hello ${NAME}!`));

  logger.info('shields at 99%');

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
}

main()
