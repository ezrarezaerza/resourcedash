const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));

// Serve resourcedash.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'resourcedash.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});