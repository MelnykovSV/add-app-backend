const createListing = require('./createListing');
const getListings = require('./getListings');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  createListing: ctrlWrapper(createListing),
  getListings: ctrlWrapper(getListings),
};
