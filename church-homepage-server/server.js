import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// ★ cors 세팅
app.use(cors({
  origin: '*', // 우선은 모든 오리진 허용해서 테스트
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// body-parser 사용
app.use(bodyParser.json());

// 라우터 연결
app.use('/api/auth', authRoutes);

// 기본 루트 응답
app.get('/', (req, res) => {
  res.send('API Server Running');
});

// 서버 스타트
const PORT = process.env.PORT || 5000;ㄴ
app.listen(PORT, () => console.log(`🌟 Server running on http://localhost:${PORT}`));
