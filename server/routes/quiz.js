const router = require('express').Router();

const quizController = require('../controller/quiz');


router.post('/quiz', quizController.postQuiz);

router.get('/quizs', quizController.getQuiz);

router.get('/quiz/:id', quizController.getQuizById);

router.patch('/quiz/:id', quizController.patchQuiz);

router.delete('/quiz/:id', quizController.deleteQuiz);


module.exports = router;


