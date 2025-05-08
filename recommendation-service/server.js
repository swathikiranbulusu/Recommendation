const express = require('express');
const mongoose = require('mongoose');
const recommendationRoutes = require('./routes/recommendationRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recommendation')
  .then(() => console.log('✅ MongoDB connected to Recommendation Service'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.use('/api/recommendations', recommendationRoutes);

const PORT = 5002;
app.listen(PORT, () => console.log(`🎯 Recommendation Service running on port ${PORT}`));
