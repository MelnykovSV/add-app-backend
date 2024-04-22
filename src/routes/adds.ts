const express = require('express');
const { getAdds, createAdd } = require('../controllers/adds');
const { validateBody, uploadCloud } = require('../middlewares');
const { addJoiSchema } = require('../models/add');

const addsRouter = express.Router();

addsRouter.get('/', getAdds);
addsRouter.post('/', uploadCloud.single('image'), validateBody(addJoiSchema), createAdd);

module.exports = addsRouter;
