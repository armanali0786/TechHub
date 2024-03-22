const Sliding = require('../models/Sliding');

// POST endpoint to handle form submission including file upload
exports.postSliding =  async (req, res) => {
    try {
        const { description, title, id } = req.body;
        // Ensure image file is uploaded
        if (!req.file) {
            throw new Error('Image file is required');
        }
        const newSlider = await Sliding.create({
            id,
            description,
            title,
            image: '/slidingImages/' + req.file.filename // Store relative file path in database
        });
        res.status(201).json({
            status: 'success',
            data: {
                Sliding: newSlider
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
exports.getSliding = async (req, res) => {
    try {
        const slider = await Sliding.find({});
        res.status(200).json({
            status: 'success',
            results: slider.length,
            data: {
                slider
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


