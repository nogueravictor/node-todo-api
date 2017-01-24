//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
    return console.log('Unable to connect to the DB Server');
  }
  console.log('Connected to DB Server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5886aad24c03df22ecca3b8a')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch To-dos');
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count: ', count);
  // }, (err)=>{
  //   console.log('Unable to count To-dos');
  // });

  db.collection('Users').find({name:'Victor'}).toArray().then((users)=>{
    console.log('Users:');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch Users');
  });

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // } );

  // db.collection('Users').insertOne({
  //   name: 'Victor Noguera',
  //   age: 32,
  //   location: 'Valencia, Venezuela'
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // } );

  //db.close();
});
