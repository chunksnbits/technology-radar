
const argv = require('yargs').argv;
const address = require('address');
const qrcode = require('qrcode-terminal');

// Test for command line flags '--debug' | '-d'  | 'mode=debug'
module.exports.isDebugMode = () => argv.debug || argv.d || argv.mode === 'debug';

// Filter out undefined / falsy elemens in collection
module.exports.onlyDefined = (collection) => collection.filter(acc => Boolean(acc));

// Produces QR-Code on Terminal with every build. Can be used for quick access on mobile devices.
module.exports.printQrCodeForLocalIp = async (protocol, port, options = { small: true }) => {
  setTimeout(() => qrcode.generate(`${ protocol }://${ address.ip() }\:${ port }\/`, options));
};

module.exports.buildTarget = (configs) => {
  const target = Boolean(argv.target) ? argv.target.trim() : 'build';
  if (!Boolean(configs[target])) {
    throw new Error(`Invalid build target ${ target }. Known targets are: ${ Object.keys(configs).join(', ') }`);
  }
  return configs[target] ? configs[target] : configs.build;
};

// Evaluates command line paramter --apps and filters available apps,
// based on the apps requested via command line.
module.exports.entries = (entryPoints) => {
  if (!Boolean(argv.apps) && !Boolean(argv.app)) {
    console.log('No --app or --apps argument detected. Compiling all entry points now');
    return entryPoints;
  }

  const apps = [argv.apps || '', argv.app || ''].join(',');

  const requested = apps.split(',').map(name => name.trim()).filter(name => Boolean(name));

  console.log('Setting entry points to:', requested.join(', '));

  return Object.entries(entryPoints)
    .filter(([name]) => {
      return requested.includes(name);
    })
    .reduce((entries, [name, config]) => {
      return {
        ...entries,
        [name]: config,
      };
    }, {});
};
