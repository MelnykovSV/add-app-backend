type Request = import('express').Request;
type Response = import('express').Response;
type NextFunction = import('express').NextFunction;
type Ctrl = import('../interfaces').Ctrl;

const ctrlWrapper = (ctrl: Ctrl) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = ctrlWrapper;
export {};
