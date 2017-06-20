const Discord = require("discord.js");
const clippy = new Discord.Client();


/* Variables for common use */
var lmgtfy = 'http://lmgtfy.com/?q=';

clippy.login("MzI2ODEwMDYyMTA4NjIyODU5.DCsTvg.EDvAy27_OmF9x4l3rZSQLIG8jqE");

clippy.on("ready", () => {
  console.log("I am ready!");
});

function messageBus(msg) {

  msg.content = msg.content.toLowerCase();
  if (msg.content.startsWith("paula")) {
    msg.channel.send("#SpaceWife");
  }

  if(msg.content.indexOf('?') !== -1 && msg.content.indexOf('http') === -1){
    var query = msg.content.replace(/ /g, '+');
    msg.channel.send(lmgtfy+query);
  }
  if(msg.isMentioned(clippy.user)){
    msg.channel.send("Yes?");
  }
};

clippy.on("message", (msg) => messageBus(msg));


/**
 * Add Bot to server with
 * https://discordapp.com/oauth2/authorize?client_id=326810062108622859&scope=bot
 *
 */
