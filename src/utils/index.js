const _ = require('lodash');
const SimpleCrypto = require('simple-crypto-js').default;

const getEnv = (name) => process.env[name];

const getEnvParam = (name, defaultValue, keyName = 'API_KEY') => {
  const env = getEnv(name);
  if (!_.isEmpty(env)) return env;

  const key = getEnv(keyName);
  if (_.isEmpty(key)) return null;

  const simpleCrypto = new SimpleCrypto(key);
  return simpleCrypto.decrypt(defaultValue);
};

module.exports = {getEnv, getEnvParam};
