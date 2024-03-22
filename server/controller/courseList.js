const CourseList = require('../models/CardList');

// POST endpoint to handle form submission including file upload
exports.postCourseList = async (req, res) => {
    try {
        const { description, price } = req.body;
        // Ensure both description and price are provided
        if (!description || !price) {
            throw new Error('Description and price are required');
        }

        // Ensure image file is uploaded
        if (!req.file) {
            throw new Error('Image file is required');
        }

        const newCourseList = await CourseList.create({
            description,
            price,
            image: '/assets/' + req.file.filename // Store relative file path in database
        });

        res.status(201).json({
            status: 'success',
            data: {
                CourseList: newCourseList
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message // Return error message
        });
    }
};



// GET endpoint to retrieve all card lists
exports.getCourseLists = async (req, res) => {
    try {
        const cards = await CourseList.find({});
        res.status(200).json({
            status: 'success',
            results: cards.length,
            data: {
                cards
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve card lists',
            error: error.message
        });
    }
};


// exports.getFilter = (req, res, next) => { 
//     const filters = req.query; 
//     const filteredUsers = data.filter(user => { 
//       let isValid = true; 
//       for (key in filters) { 
//         console.log(key, user[key], filters[key]); 
//         isValid = isValid && user[key] == filters[key]; 
//       } 
//       return isValid; 
//     }); 
//     res.send(filteredUsers); 
//   }; 
    


