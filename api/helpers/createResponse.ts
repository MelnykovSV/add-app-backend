type Response = import('express').Response;

const createResponse = (
  res: Response,
  code: number = 200,
  message: string = 'Operation successful',
  data: any = null,
) => {
  if (data) {
    return res.status(code).json({
      status: 'success',
      code,
      message,
      data,
    });
  }
  return res.status(code).json({
    status: 'success',
    code,
    message,
  });
};

module.exports = createResponse;
