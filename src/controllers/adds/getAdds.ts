const { Add } = require('../../models/add');
const { createResponse } = require('../../helpers');

type IExtendedRequest = import('../../interfaces').IExtendedRequest;

const getAdds = async (req: IExtendedRequest, res: Express.Response) => {
  const data = await Add.find({}, '-createdAt -updatedAt');

  createResponse(res, 200, 'Adds', {
    adds: data,
  });
};

module.exports = getAdds;
