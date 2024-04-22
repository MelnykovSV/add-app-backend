const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();

const { DB_HOST } = process.env;
mongoose.set('strictQuery', true);
const port = 5000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database connection successful');
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running. Use our API on port: ${port}`);
    });
  })
  .catch((error: any) => {
    // eslint-disable-next-line no-console
    console.log(error.message);
    process.exit(1);
  });
