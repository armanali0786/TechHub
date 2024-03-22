const express = require('express')
const router = require('express').Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadsDirectory = path.join(__dirname, '../public/assets');
if (!fs.existsSync(uploadsDirectory)) {
    fs.mkdirSync(uploadsDirectory);
}

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDirectory); // Use the uploads directory we created
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique filename to prevent overwriting
    }
});

const upload = multer({ storage: storage });

// Serve static files from the public directory
router.use(express.static(path.join(__dirname, '../public')));
const CourseListController = require('../controller/courseList');

router.post('/courseList', upload.single('image'), CourseListController.postCourseList);

router.get('/courseLists', CourseListController.getCourseLists);


module.exports = router;


