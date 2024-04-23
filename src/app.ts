const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const listingsRouter = require('./routes/listings');
require('dotenv').config();

type Request = import('express').Request;
type Response = import('express').Response;
type NextFunction = import('express').NextFunction;

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/listings', listingsRouter);

app.use((_: Request, res: Response) => {
  res.status(400).json({
    status: 'error',
    code: 400,
    message: 'bad request',
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const { status = 500, message = 'Internal Server Error' } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message,
  });
});

module.exports = app;
