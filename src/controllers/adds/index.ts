const createAdd = require('./createAdd');
const getAdds = require('./getAdds');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  createAdd: ctrlWrapper(createAdd),
  getAdds: ctrlWrapper(getAdds),
};
