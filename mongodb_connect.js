const MongoClient = require('mongodb').MongoClient;
const uri = 'mongo:27017/DockerTest';
mongoose.connect('database:27017/mongocrud')
console.log(uri)

module.exports = function(callback) {
  MongoClient.connect(uri,{ useNewUrlParser: true },(err,client) => {
      if(err)
       console.log(err)
      callback(client);
  });
};

