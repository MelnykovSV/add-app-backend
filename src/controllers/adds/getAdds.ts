const { Add } = require('../../models/add');
const { createResponse, HttpError } = require('../../helpers');

type IExtendedRequest = import('../../interfaces').IExtendedRequest;

const getAdds = async (req: IExtendedRequest, res: Express.Response) => {
  const { minLat, maxLat, minLon, maxLon } = req.query;

  if (!minLat || !maxLat || !minLon || !maxLon) {
    throw HttpError(400, 'Provide Lan and Lon range');
  }

  const data = await Add.find(
    { lat: { $gt: minLat, $lt: maxLat }, lon: { $gt: minLon, $lt: maxLon } },
    '-createdAt -updatedAt',
  );

  createResponse(res, 200, 'Adds', {
    adds: data,
  });
};

module.exports = getAdds;
