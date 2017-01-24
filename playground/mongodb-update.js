//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
    return console.log('Unable to connect to the DB Server');
  }
  console.log('Connected to DB Server');

  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate(
    {text:'Eat lunch'},
    {$set:{completed:true}},{returnOriginal:false}).then((res)=>{
      console.log(res);
    });

  //db.close();
});
