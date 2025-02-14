// Create web server
// 1. Import express
const express = require('express');
// 2. Create express app
const app = express();
// 3. Add a route
app.get('/', (req, res) => {
  res.send('Welcome to the comments page!');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});