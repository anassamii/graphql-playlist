const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://anassamii:anas123@ac-jbqn1pq-shard-00-00.fudzgu7.mongodb.net:27017,ac-jbqn1pq-shard-00-01.fudzgu7.mongodb.net:27017,ac-jbqn1pq-shard-00-02.fudzgu7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pfvpcl-shard-0&authSource=admin&retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
