const Discord = require("discord.js");
const clippy = new Discord.Client();
var discordApp = require('./config/build').discord;


/* Variables for common use */
var lmgtfy = 'http://lmgtfy.com/?q=';
var google = 'http://www.google.com/search?q=';

clippy.login(discordApp.token);

clippy.on("ready", () => {
  console.log("I am ready!");
});

function messageBus(msg) {
  if(msg.author.id != clippy.user.id) {
    msg.content = msg.content.toLowerCase();
    if (msg.content.indexOf('clippy') !== -1) {
      msg.channel.send("Yes?");
    }
    if(msg.isMentioned(clippy.user)){
      msg.content = msg.content.replace('<@'+clippy.user.id+'>','').trim();;
      if(msg.content.indexOf('?') !== -1){
        var query = msg.content.replace(/ /g, '+');
       msg.channel.send(google+query);
      } else {
        msg.channel.send("Please ask me a question.");
      }
    }
  }
};

clippy.on("message", (msg) => messageBus(msg));


/**
 * Add Bot to server with
 * https://discordapp.com/oauth2/authorize?client_id=326810062108622859&scope=bot
 *
 */
