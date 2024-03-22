const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    heading: String,
    price: String,
    created_at: Date,
    image: String,
    large_image: String,
    course_date: Date,
    type: String,
    is_favourite: Boolean,
    description: String,
    applicable: String,
    search: String,
    is_featured: Boolean,
    categories_ids: [String], 
    certificate_link:  String,
    course_content: [{
        text: {
          type: String,
          required: true
        }
      }],
    // course_videos: {
    //   video_id: String,
    //   name: String,
    //   Date: Date, // Changed 'Date' to 'Date' as 'Date' is a reserved keyword in JavaScript
    //   couser_price: String, // Corrected spelling from 'couser_price' to 'course_price'
    //   image: String,
    //   Access: String
    // },
  });
  

  const CourseDetails = mongoose.model('CourseDetails', courseSchema);

module.exports = CourseDetails;