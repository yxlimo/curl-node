const process = require('process')
const program = require('commander')

program
  .version('0.0.1')
  .usage('curl [options...] <url>')
  .option('-i, --include', 'Include protocol headers in the output (H/F)')
  .option('-I, --head', 'Show document info only')
  .option('-v, --verbose', 'Make the operation more talkative')
  .parse(process.argv)

program.url = program.args[0]
module.exports = program