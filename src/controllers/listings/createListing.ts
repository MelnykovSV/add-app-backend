const { Listing } = require('../../models/listing');
const { createResponse, HttpError } = require('../../helpers');

type IExtendedRequest = import('../../interfaces').IExtendedRequest;

const createListing = async (req: IExtendedRequest, res: Express.Response) => {
  if (!req.file) {
    throw HttpError(400, 'File is required');
  }

  const data = await Listing.create({ ...req.body, image: req.file.path });

  createResponse(res, 200, 'New listing', {
    'New listing data': data,
  });
};

module.exports = createListing;
