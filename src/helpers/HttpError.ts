type IError = import('../interfaces').IError;

const defaultErrorMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

const HttpError = (
  status: keyof typeof defaultErrorMessages,
  message = defaultErrorMessages[status],
) => {
  if (!Object.prototype.hasOwnProperty.call(defaultErrorMessages, status)) {
    const error = new Error('Unknown error');
    return error;
  }

  const error = new Error(message) as IError;
  error.status = status;
  return error;
};

module.exports = HttpError;
