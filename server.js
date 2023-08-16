// Dependencies required for application
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routes for Blog posts
app.get('/', (req, res) => {
  const blogPosts = [
    { title: 'First Post', content: 'This is the first blog post.' },
    { title: 'Second Post', content: 'This is the second blog post.' }
  ];

  res.render('home', { blogPosts });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});