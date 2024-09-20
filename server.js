const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// POST endpoint to handle form submission
app.post('/api/data', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', { name, email });
  res.json({ message: 'Data received successfully!' });
});

// Serve React App for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

