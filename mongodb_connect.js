const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://' + (process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost') + ':' + (process.env.MONGO_PORT_27017_TCP_PORT || '27017');

console.log(uri)

module.exports = function(callback) {
  MongoClient.connect(uri,{ useNewUrlParser: true },(err,client) => {
      if(err)
       console.log(err)
      callback(client);
  });
};

