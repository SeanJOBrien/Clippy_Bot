var fs = require('fs');
var commands = require('./commands/index');

module.exports = {
  run: function(client, msg) {
    var respond;
    var cmd = msg.content.split(' ')[0];
    msg.content = msg.content.replace(cmd, '');
    commands[cmd](msg).then(function(response){
      msg.channel.send(response);
    }).catch(function(err){
      console.log(err);
      msg.channel.send('I\'m sorry I don\'t understand.');
    });
  }
};
