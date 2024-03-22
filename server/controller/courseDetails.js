const CourseDetails = require('../models/CourseDetails');

// POST route to create a new course
exports.postcourseDetails = async (req, res) => {
  console.log("Course Details",req.body);

    const { title, description, created_at,
      // large_image, 
       search,is_featured,lessions,
       categories_ids, image, heading, 
       price,
       applicable, course_date, 
       type, 
      //  course_videos, 
       certificate_link, 
       is_favourite,
       course_content
    } = req.body;
    // Create a new Course instance with the provided data
    const course = new CourseDetails({
      title,
      description,
      created_at,
      price,
      // large_image,
      search,
      lessions,
      is_featured,
      categories_ids,
      image,
      heading,
      applicable,
      course_content,
      course_date,
      type,
      // course_videos,
      certificate_link,
      is_favourite
    });
  
    try {
      // Save the new course to the database
      const newCourse = await course.save();
      res.status(200).json(newCourse);
    } catch (err) {
      // If there's an error during saving, return a 400 status code with the error message
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.getcourseDetails =  async (req, res) => {
    try {
      const course = await CourseDetails.find();
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
