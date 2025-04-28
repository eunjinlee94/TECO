import { db } from '../config/firebase.js';

// ユーザー登録処理
export const registerUser = async (req, res) => {
  try {
    const { userId, userPw, userName, userEmail, userPhone, userAddress } = req.body;

    // Firestoreにユーザーデータを保存
    await db.collection('users').add({
      userId,
      userPw,
      userName,
      userEmail,
      userPhone,
      userAddress,
      createdAt: new Date()
    });

    res.status(200).json({ message: '会員登録完了' });
  } catch (error) {
    console.error('会員登録エラー', error);
    res.status(500).json({ message: 'サーバエラー発生' });
  }
};
