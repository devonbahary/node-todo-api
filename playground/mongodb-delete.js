// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoDB module v2
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // deleteMany
    // db.collection('Todos').deleteMany().then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result.value);
    // });


    // challenge deletions
    // db.collection('Users').deleteMany({name: 'Devon'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5aaeddccf6dfc12a80ac2cb1')}).then((result) => {
    //     console.log(result.value);
    // });

    // db.close();
});

// MongoDB module v3
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server.');
//     }
//     console.log('Connected to MongoDB server.');
//     const db = client.db('TodoApp');
//
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }
//
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
//
//     client.close();
// });
