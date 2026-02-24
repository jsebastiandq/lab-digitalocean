const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Trust proxy (useful for DigitalOcean/Nginx)
app.set('trust proxy', 1);

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
