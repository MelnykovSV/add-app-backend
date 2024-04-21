const Add = require('../../models/add');
const { createResponse } = require('../../helpers');

type IExtendedRequest = import('../../interfaces').IExtendedRequest;

const createAdd = async (req: IExtendedRequest, res: Express.Response) => {
  const data = await Add.create({ ...req.body });

  createResponse(res, 200, 'New add', {
    'New add data': data,
  });
};

module.exports = createAdd;
