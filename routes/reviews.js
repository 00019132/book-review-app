const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const reviewsController = require('../controllers/reviews');

const reviewValidationRules = [
  check('title').notEmpty().withMessage('Book title is required'),
  check('author').notEmpty().withMessage('Author name is required'),
  check('genre').notEmpty().withMessage('Genre is required'),
  check('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  check('content').notEmpty().withMessage('Review content is required')
];


router.get('/', reviewsController.getAllReviews);


router.get('/new', reviewsController.getCreateForm);


router.post('/', reviewValidationRules, reviewsController.createReview);


router.get('/:id/edit', reviewsController.getEditForm);


router.put('/:id', reviewValidationRules, reviewsController.updateReview);


router.delete('/:id', reviewsController.deleteReview);

module.exports = router;