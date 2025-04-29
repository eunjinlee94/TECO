// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// CORS 세팅
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// BodyParser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API 경로 연결
app.use('/api/auth', authRoutes);

// 기본 루트
app.get('/', (req, res) => {
  res.send('API Server Running!');
});

// 서버 실행
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
