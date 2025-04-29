import express from 'express';
import { registerUser,loginUser } from '../controllers/authController.js';

const router = express.Router();

// 회원가입 API
router.post('/register', registerUser);
// 로그인 API
router.post('/login', loginUser);   

export default router;
