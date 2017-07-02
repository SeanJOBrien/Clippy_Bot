var google = require('./cmds/google');
var weather = require('./cmds/weather');
var admin = require('./cmds/admin');

module.exports = {
  search: google.search,
  lmgtfy: google.lmgtfy,
  forcast: weather.forcast,
  exit: admin.exit
};
