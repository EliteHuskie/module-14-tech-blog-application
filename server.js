const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});