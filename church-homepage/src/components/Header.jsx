// Header.jsx
import { Link } from "react-router-dom";
import "../css/header.css"; // ヘッダー用CSS読み込み

function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* ロゴ */}
          <Link to="/" className="navbar-brand logo">
            水戸バプテスト教会
          </Link>

          {/* トグルボタン（スマホ用） */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ナビゲーションメニュー */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <Link to="/church" className="nav-link">教会について</Link>
              </li>
              <li className="nav-item">
                <Link to="/message" className="nav-link">礼拝メッセージ</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">教会ニュース</Link>
              </li>
              <li className="nav-item">
                <Link to="/access" className="nav-link">アクセス</Link>
              </li>
            </ul>

            {/* ログイン/サインアップボタン */}
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-outline-primary btn-sm">LOGIN</Link>
              <Link to="/join" className="btn btn-primary btn-sm">SIGN UP</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
