import { useState } from "react";
import '../css/join.css';

function Join() {
  const [formData, setFormData] = useState({
    userName: '',
    userId: '',
    userPw: '',
    userPwConfirm: '',
    userEmail: '',
    userPhone: '',
    userAddress: ''
  });

  const [errors, setErrors] = useState({});

  // 입력 변화 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'userName') {
      // 숫자 포함 안 됨
      if (/[0-9]/.test(value)) {
        newErrors.userName = '氏名には数字を含めないでください。';
      } else if (value.length < 2 || value.length > 20) {
        newErrors.userName = '氏名は2〜20文字で入力してください。';
      } else {
        delete newErrors.userName;
      }
    }

    if (name === 'userId') {
      // 영문+숫자만 허용
      if (!/^[a-zA-Z0-9]*$/.test(value)) {
        newErrors.userId = 'ユーザーIDは英数字のみ使用できます。';
      } else if (value.length < 4 || value.length > 16) {
        newErrors.userId = 'ユーザーIDは4〜16文字で入力してください。';
      } else {
        delete newErrors.userId;
      }
    }

    if (name === 'userPw') {
      if (value.length < 6 || !/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
        newErrors.userPw = 'パスワードは6文字以上、英字と数字を含めてください。';
      } else {
        delete newErrors.userPw;
      }
    }

    if (name === 'userPwConfirm') {
      if (value !== formData.userPw) {
        newErrors.userPwConfirm = 'パスワードが一致しません。';
      } else {
        delete newErrors.userPwConfirm;
      }
    }

    if (name === 'userEmail') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.userEmail = '有効なメールアドレスを入力してください。';
      } else {
        delete newErrors.userEmail;
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      alert('正しく入力されていない項目があります。');
      return;
    }

    try {
        const res = await fetch('http://localhost:5001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

      await res.json();

      if (res.ok) {
        alert('会員登録が完了しました！');
        window.location.href = '/src/html/index.html';
      } else {
        alert('会員登録に失敗しました。');
      }
    } catch (err) {
      console.error('エラー発生', err);
      alert('サーバーに接続できませんでした。');
    }
  };

  return (
    <div className="join container">
      <div className="form-container">
        <div className="form-title">会員登録</div>
        <form onSubmit={handleSubmit} className="form-grid">

          {/**氏名 */}
          <div className="form-row">
            <label htmlFor="userName" className="form-label">氏名 *</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                id="userName"
                name="userName"
                className="form-control"
                placeholder="氏名を入力"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              {errors.userName && <div className="error-message">{errors.userName}</div>}
            </div>
          </div>

          {/**ユーザーID */}
          <div className="form-row">
            <label htmlFor="userId" className="form-label">ユーザーID *</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                id="userId"
                name="userId"
                className="form-control"
                placeholder="ユーザーIDを入力"
                value={formData.userId}
                onChange={handleChange}
                required
              />
              {errors.userId && <div className="error-message">{errors.userId}</div>}
            </div>
          </div>

          {/**パスワード */}
          <div className="form-row">
            <label htmlFor="userPw" className="form-label">パスワード *</label>
            <div className="form-input-wrapper">
              <input
                type="password"
                id="userPw"
                name="userPw"
                className="form-control"
                placeholder="パスワードを入力"
                value={formData.userPw}
                onChange={handleChange}
                required
              />
              {errors.userPw && <div className="error-message">{errors.userPw}</div>}
            </div>
          </div>

          {/**パスワード確認 */}
          <div className="form-row">
            <label htmlFor="userPwConfirm" className="form-label">パスワード確認 *</label>
            <div className="form-input-wrapper">
              <input
                type="password"
                id="userPwConfirm"
                name="userPwConfirm"
                className="form-control"
                placeholder="もう一度パスワードを入力"
                value={formData.userPwConfirm}
                onChange={handleChange}
                required
              />
              {errors.userPwConfirm && <div className="error-message">{errors.userPwConfirm}</div>}
            </div>
          </div>

          {/**メールアドレス */}
          <div className="form-row">
            <label htmlFor="userEmail" className="form-label">メールアドレス *</label>
            <div className="form-input-wrapper">
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                className="form-control"
                placeholder="メールアドレスを入力"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              {errors.userEmail && <div className="error-message">{errors.userEmail}</div>}
            </div>
          </div>

          {/**電話番号 */}
          <div className="form-row">
            <label htmlFor="userPhone" className="form-label">電話番号</label>
            <div className="form-input-wrapper">
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                className="form-control"
                placeholder="電話番号を入力（任意）"
                value={formData.userPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/**住所 */}
          <div className="form-row">
            <label htmlFor="userAddress" className="form-label">住所</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                id="userAddress"
                name="userAddress"
                className="form-control"
                placeholder="住所を入力（任意）"
                value={formData.userAddress}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn-submit">登録する</button>

        </form>
      </div>
    </div>
  );
}

export default Join;
