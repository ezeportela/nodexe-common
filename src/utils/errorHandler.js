const createError = (code) => {
  const error = new Error();
  error.code = code;
  throw error;
};

const throwError = ({code, message, severity, err}, logFn) => {
  logFn(
    `An error had ocurred: error_code: ${code} | ${err.message}\n${err.stack}`,
  );
  const error = new Error();
  error.code = code;
  error.message = message;
  error.severity = severity;
  throw error;
};

module.exports = {
  createError,
  throwError,
};
