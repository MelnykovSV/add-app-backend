const express = require('express');
const { getAdds, createAdd } = require('../controllers/adds');

const addsRouter = express.Router();

addsRouter.get('/', getAdds);
addsRouter.post('/', createAdd);

module.exports = addsRouter;
