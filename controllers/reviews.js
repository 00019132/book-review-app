const { validationResult } = require('express-validator');
const { reviewService } = require('../services');

const reviewsController = {
  getAllReviews: (req, res) => {
    const reviews = reviewService.getAllReviews();
    res.render('reviews-list', { 
      title: 'All Book Reviews',
      reviews
    });
  },

  getCreateForm: (req, res) => {
    res.render('review-form', { 
      title: 'Add New Book Review',
      review: {},
      formAction: '/reviews',
      formMethod: 'POST'
    });
  },

  createReview: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('review-form', {
        title: 'Add New Book Review',
        review: req.body,
        errors: errors.array(),
        formAction: '/reviews',
        formMethod: 'POST'
      });
    }

    reviewService.createReview(req.body);
    res.redirect('/reviews');
  },

  getEditForm: (req, res) => {
    const review = reviewService.getReviewById(req.params.id);
    if (!review) {
      const err = new Error('Review not found');
      err.status = 404;
      throw err;
    }
    
    res.render('review-form', { 
      title: 'Edit Book Review',
      review,
      formAction: `/reviews/${review.id}?_method=PUT`,
      formMethod: 'POST'
    });
  },

  updateReview: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('review-form', {
        title: 'Edit Book Review',
        review: { ...req.body, id: req.params.id },
        errors: errors.array(),
        formAction: `/reviews/${req.params.id}?_method=PUT`,
        formMethod: 'POST'
      });
    }

    reviewService.updateReview(req.params.id, req.body);
    res.redirect('/reviews');
  },

  deleteReview: (req, res) => {
    reviewService.deleteReview(req.params.id);
    res.redirect('/reviews');
  }
};

module.exports = reviewsController;