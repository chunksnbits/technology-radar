
const argv = require('yargs').argv;
const address = require('address');
const qrcode = require('qrcode-terminal');
const util = require('util');

// Test for command line flags '--debug' | '-d'  | 'mode=debug'
module.exports.isDebugMode = () => argv.debug || argv.d || argv.mode === 'debug';

// Filter out undefined / falsy elemens in collection
module.exports.onlyDefined = (collection) => collection.filter(acc => Boolean(acc));

module.exports.printQrCodeForLocalIp = async (protocol, port, options = { small: true }) => {
  setTimeout(() => qrcode.generate(`${ protocol }://${ address.ip() }\:${ port }\/`, options));
}