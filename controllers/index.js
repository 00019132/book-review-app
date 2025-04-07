const indexController = {
  getHomePage: (req, res) => {
    res.render('index', { 
      title: 'Book Review App',
      message: 'Welcome to the Book Review App'
    });
  }
};

module.exports = indexController;