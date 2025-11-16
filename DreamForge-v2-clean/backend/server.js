import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import geminiController from './api/gemini-controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', geminiController);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'DreamForge API is running' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Something went wrong',
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DreamForge backend running on http://localhost:${PORT}`);
});