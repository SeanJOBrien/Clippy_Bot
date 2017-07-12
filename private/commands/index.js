const google = require('./cmds/google');
const weather = require('./cmds/weather');
const admin = require('./cmds/admin');

module.exports = {
  search: google.search,
  lmgtfy: google.lmgtfy,
  forcast: weather.forcast,
  exit: admin.exit
};
