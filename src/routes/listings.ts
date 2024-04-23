const express = require('express');
const { getListings, createListing } = require('../controllers/listings');
const { validateBody, uploadCloud } = require('../middlewares');
const { listingJoiSchema } = require('../models/listing');

const listingsRouter = express.Router();

listingsRouter.get('/', getListings);
listingsRouter.post(
  '/',
  uploadCloud.single('image'),
  validateBody(listingJoiSchema),
  createListing,
);

module.exports = listingsRouter;
