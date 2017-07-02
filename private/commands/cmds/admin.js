function exit(msg) {
  return new Promise(function (resolve, reject){
    process.exit();
  });
}

module.exports = {
  exit: exit
};
