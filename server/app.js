const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const dotenv  = require ("dotenv");
const router = require('./routes')
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();


app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB!!!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use(express.json());

app.use('/', router)

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.listen(4040, function () {
    console.log('Example app listening on port 4040!');
});