console.log(__filename);
console.log(__dirname);
var url = "www.logger.com/log";

function log(message) {
  // send http request
  console.log(message);
}

module.exports = log;