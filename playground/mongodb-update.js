// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoDB module v2
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // findOneAndUpdate (filter, update, options)
    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID('5aaef4be1fa0fe8ee1be2cc6')}
    , {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // challenge
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aaee2a604c6f90b983c7b56')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Devon'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result);
    });

    // db.close();
});
