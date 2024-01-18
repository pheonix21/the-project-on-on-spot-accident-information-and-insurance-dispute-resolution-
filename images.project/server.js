const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const dbURI = 'mongodb+srv://mohammedarhaan:YAcmvK9jEKkXN9iG@cluster0.dds206u.mongodb.net/data';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
   if (err) throw err;
   const db = client.db('data');
   // Define your routes and database interactions here
 })

 .then((result) => {
    console.log('Connected to MongoDB');
 })
 .catch((err) => {
    console.log(err);
 });

app.use(express.static('public'));

app.get('indexxx', function (req, res){
   db.collection('').find().toArray((err, data) => {
      if (err) throw err;
      res.json(data); // Send data back as JSON
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});