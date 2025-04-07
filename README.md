# About the App
This is a simple dynamic web application developed for the Web Technologies module. It's Users can create, read, update, and delete book reviews, including details such as title, author, genre, and even rating. Built with Express.js and Node.js, and minimalistic UI made using Pug.

# How to Run Locally  
1. `git clone https://github.com/00019132/book-review-app.git` clone your repository
 
2. `cd book-review-app` navigate to the folder where your project is at

3. `npm install` before this Node.js and npm packages should be installed on your computer 

4. `node app.js`  to start the app and then the `http://localhost:3000`should appear

5. Lastly copy `http://localhost:3000` and then open any modern browser and then insert the link and finally u should be able to see your project.

# Dependencies used
express.js framework used for Node.js 
pug templates used for UI
express validator used for validation and error handling 

# Links
Github repository link : https://github.com/00019132/book-review-app.git 
Glitch link :

# Project Structure
Here is my structure :

/BOOK-REVIEW-APP          #Main project folder
─ controllers/            #Controller to handle the requests
  ─ index.js              
  ─ reviews.js            
─ public/                 #Folder to store files related to clients side
  ─ images/               #Folder for images
  ─ javascripts/          #Folder for js
  ─ styles/               #Folder for styling(CSS)
    - style.css           #Basic UI for the cliant's side
─ routes/                 #Folder for keeping specific route groups 
  ─ index.js              
  ─ reviews.js            
─ services/               #Folder for service logic
  ─ index.js              
  ─ reviews.js
─ views/                  #Pug templates used for UI
  ─ error.pug             #Error page
  ─ index.pug             #Homepage
  ─ layout.pug            #Layout 
  ─ review-form.pug       #Adding/Editing reviews
  ─ reviews-list.pug      #For showing the list of all reviews
─ .gitignore              #For ignoring node_modules folder
─ app.js                  #Main app to start the server
─ db.json                 #Lowdb database for reviews
─ nodemon.json            
─ package-lock.json       
─ package.json            
