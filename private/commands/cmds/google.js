/* Variables for common use */
var lmgtfyUrl = 'http://lmgtfy.com/?q=';
var google = 'http://www.google.com/search?q=';

function googleit(msg) {
  return new Promise(function (resolve, reject){
    var query = msg.content.trim().replace(/ /g, '+');
    resolve(google+query);
  });
}

function lmgtfy(msg) {
  return new Promise(function (resolve, reject){
    var query = msg.content.trim().replace(/ /g, '+');
    resolve(lmgtfyUrl+query);
  });
}

module.exports = {
  search: googleit,
  lmgtfy: lmgtfy
};
