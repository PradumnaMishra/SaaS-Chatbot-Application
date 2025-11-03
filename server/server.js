// Placeholder server file
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('SaaS Chatbot API - placeholder'));
app.listen(3000, () => console.log('Server running on port 3000'));
