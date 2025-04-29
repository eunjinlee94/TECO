import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import axios from 'axios';
import '../css/login.css';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // フォーム送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // サーバーへログインリクエスト送信
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        userId: loginId,
        userPw: loginPw,
      });

      console.log('ログイン成功:', response.data);

      // ログイン成功後、ホームページに移動
      navigate('/');
    } catch (err) {
      console.error('ログインエラー:', err);
      setError('IDまたはパスワードが正しくありません。');
    }
  };

  return (
    <div className="login container">
      <div className="form-container">
        <div className="form-title">ログイン</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginId" className="form-label">ユーザーID</label>
            <input
              type="text"
              className="form-control"
              id="loginId"
              placeholder="ユーザーIDを入力"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="loginPw" className="form-label">パスワード</label>
            <input
              type="password"
              className="form-control"
              id="loginPw"
              placeholder="パスワードを入力"
              value={loginPw}
              onChange={(e) => setLoginPw(e.target.value)}
              required
            />
          </div>

          {/* エラーメッセージ表示 */}
          {error && <div className="text-danger text-center mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary btn-submit">
            ログイン
          </button>
          <a className="btn btn-secondary" href="/join">新規登録</a>

          <div className="link-group">
            <a href="/find_id">IDを忘れた方</a>
            <a href="/find_pw">パスワードを忘れた方</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
