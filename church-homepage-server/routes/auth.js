import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// ユーザー登録エンドポイント
router.post('/register', registerUser);

export default router;
