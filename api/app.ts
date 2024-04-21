const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

type Request = import('express').Request;
type Response = import('express').Response;

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req: Request, res: Response) => {
  // eslint-disable-next-line no-console
  console.log('Response');

  res.status(200).json({
    message: 'Response',
    data: 'Some response message',
  });
});

app.use((_: Request, res: Response) => {
  res.status(400).json({
    status: 'error',
    code: 400,
    message: 'bad request',
  });
});

app.use((err: any, _: Request, res: Response) => {
  const { status = 500, message = 'Internal Server Error' } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message,
  });
});

module.exports = app;
