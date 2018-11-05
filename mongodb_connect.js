const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/DockerTest';

module.exports = function(callback) {
  MongoClient.connect(uri,{ useNewUrlParser: true },(err,client) => {
      if(err)
       console.log(err)
      callback(client);
  });
};

