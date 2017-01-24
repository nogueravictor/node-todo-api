//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
    return console.log('Unable to connect to the DB Server');
  }
  console.log('Connected to DB Server');

  //deleteMany
  db.collection('Users').deleteMany({age:32}).then((res)=>{
    console.log(res);
  }, (err)=>{
    console.log(err);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // }, (err)=>{
  //   console.log(err);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
    console.log(res);
  }, (err)=>{
    console.log(err);
  });

  //db.close();
});
