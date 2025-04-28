// 必要なモジュールをインポート
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';

// 環境変数をロード
dotenv.config();

// アプリ作成
const app = express();

// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// ルーティング設定
app.use('/api/auth', authRoutes);

// サーバ起動
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
