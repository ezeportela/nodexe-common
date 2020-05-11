const CacheService = require('./src/lib/CacheService');
const FileService = require('./src/lib/FileService');
const StorageService = require('./src/lib/StorageService');

const conversions = require('./src/utils/conversions');
const errorHandler = require('./src/utils/errorHandler');
const requireDependency = require('./src/utils/requireDependency');
const Timespent = require('./src/utils/timespent');

const {getEnv, getEnvParam} = require('./src/utils');

const validateTokenProps = require('./src/middlewares/validateTokenProps');

module.exports = {
  CacheService,
  FileService,
  StorageService,

  conversions,
  errorHandler,
  requireDependency,
  Timespent,

  getEnv,
  getEnvParam,

  validateTokenProps,
};
