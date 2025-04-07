const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);


db.defaults({ reviews: [], nextId: 1 }).write();

const reviewService = {

  getAllReviews: () => {
    return db.get('reviews').value();
  },


  getReviewById: (id) => {
    return db.get('reviews').find({ id: parseInt(id) }).value();
  },

  createReview: (reviewData) => {
    const id = db.get('nextId').value();
    
    const review = {
      id,
      ...reviewData,
      createdAt: new Date().toISOString()
    };
    
    db.get('reviews').push(review).write();
    db.update('nextId', n => n + 1).write();
    
    return review;
  },


  updateReview: (id, reviewData) => {
    const review = db.get('reviews')
      .find({ id: parseInt(id) })
      .assign({ 
        ...reviewData, 
        updatedAt: new Date().toISOString() 
      })
      .write();
      
    return review;
  },


  deleteReview: (id) => {
    return db.get('reviews')
      .remove({ id: parseInt(id) })
      .write();
  }
};

module.exports = reviewService;