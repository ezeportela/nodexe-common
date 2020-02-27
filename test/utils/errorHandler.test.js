const errorHandler = require('../../src/utils/errorHandler');

const {createError, throwError} = errorHandler;

describe('test utils > error handler', () => {
  it('create Error', (done) => {
    try {
      createError('invalid_data');
    } catch (err) {
      expect(err.code).to.eql('invalid_data');
      done();
    }
  });

  it('throw Error', (done) => {
    try {
      const error = new Error('test');
      throwError(
        {
          code: 'test_code',
          message: 'A test message',
          severity: 'LOW',
          err: error,
        },
        console.error,
      );
    } catch (err) {
      expect(err.code).to.eql('test_code');
      done();
    }
  });
});
