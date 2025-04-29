// Firebase Firestoreインスタンスをインポート
import { db } from '../config/firebase.js';

// 会員登録処理
export const registerUser = async (req, res) => {
  try {
    const { userId, userPw, userName, userEmail, userPhone, userAddress } = req.body;

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
    res.status(500).json({ message: 'サーバーエラーが発生しました' });
  }
};

// 🔽 ログイン処理を追加
export const loginUser = async (req, res) => {
  try {
    const { userId, userPw } = req.body;

    const userQuery = await db.collection('users').where('userId', '==', userId).get();

    if (userQuery.empty) {
      return res.status(404).json({ message: 'ユーザーが存在しません' });
    }

    const userData = userQuery.docs[0].data();

    if (userData.userPw !== userPw) {
      return res.status(401).json({ message: 'パスワードが正しくありません' });
    }

    res.status(200).json({ message: 'ログイン成功', user: userData });
  } catch (error) {
    console.error('ログインエラー', error);
    res.status(500).json({ message: 'サーバーエラーが発生しました' });
  }
};
