const attach_library = function(string) {

  let library = require(string);
  return library;
}

module.exports = attach_library;
