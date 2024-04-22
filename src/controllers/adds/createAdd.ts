const { Add } = require('../../models/add');
const { createResponse, HttpError } = require('../../helpers');

type IExtendedRequest = import('../../interfaces').IExtendedRequest;

const createAdd = async (req: IExtendedRequest, res: Express.Response) => {
  if (!req.file) {
    throw HttpError(400, 'File is required');
  }

  const data = await Add.create({ ...req.body, image: req.file.path });

  createResponse(res, 200, 'New add', {
    'New add data': data,
  });
};

module.exports = createAdd;
