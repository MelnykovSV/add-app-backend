const { HttpError } = require('../helpers');

type Response = import('express').Response;
type NextFunction = import('express').NextFunction;
type IExtendedRequest = import('../interfaces').IExtendedRequest;

const validateBody = (schema: any) => {
  const func = (req: IExtendedRequest, res: Response, next: NextFunction) => {
    if (!Object.keys(req.body).length || !req.body) {
      next(HttpError(400, 'missing fields'));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = validateBody;
