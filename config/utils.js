
const argv = require('yargs').argv;

// Test for command line flags '--debug' | '-d'  | 'mode=debug'
module.exports.isDebugMode = () => argv.debug || argv.d || argv.mode !== 'debug';

// Filter out undefined / falsy elemens in collection
module.exports.onlyDefined = (collection) => collection.filter(acc => Boolean(acc));