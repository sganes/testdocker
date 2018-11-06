const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://mongo:27017'
console.log(uri)
module.exports = function(callback) {
  MongoClient.connect(uri,{ useNewUrlParser: true },(err,client) => {
      if(err)
       console.log(err)
      callback(client);
  });
};

