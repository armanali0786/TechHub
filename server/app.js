const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const dotenv  = require ("dotenv");
const cors = require('cors');
const multer = require('multer');


const AuthRouters = require('./routes/auth_routes')
const QuizRoutes = require('./routes/quiz')
const courseListRoutes = require('./routes/courseList')
// const CourseDetailsRoutes = require('./routes/courseDetails')
const featureRoutes = require('./routes/features')
const SlidingRoutes = require('./routes/sliding');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(AuthRouters);
app.use(QuizRoutes);
// app.use(CourseDetailsRoutes);
app.use(featureRoutes);
app.use(courseListRoutes);
app.use(SlidingRoutes);


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

app.listen(4040, function () {
    console.log('Example app listening on port 4040!');
});