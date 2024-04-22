const express = require('express');
const { getAdds, createAdd } = require('../controllers/adds');
const { validateBody } = require('../middlewares');
const { addJoiSchema } = require('../models/add');

const addsRouter = express.Router();

addsRouter.get('/', getAdds);
addsRouter.post('/', validateBody(addJoiSchema), createAdd);

module.exports = addsRouter;
