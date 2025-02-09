const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Assessment = require('./models/Assessment');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/submit-assessment', async (req, res) => {
  try {
    const { answers, score, timeSpent } = req.body;
    const assessment = new Assessment({
      answers,
      score,
      timeSpent
    });

    await assessment.save();
    res.status(201).json({ success: true, data: assessment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
