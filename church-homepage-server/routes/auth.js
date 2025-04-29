// routes/auth.js

import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// 회원가입 API
router.post('/register', registerUser);

export default router;
