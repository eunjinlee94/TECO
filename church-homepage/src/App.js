// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Join from './pages/Join';
import Login from './pages/Login';
import Church1 from './pages/Church1';
import PostList from './pages/posts/PostList';
import PostDetail from './pages/posts/PostDetail';
import PostEdit from './pages/posts/PostEdit';
import PostCreate from './pages/posts/PostCreate';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* ヘッダーは常に表示 */}
      <Header />

      <div className="App">
        <Routes>
          {/* インデックスページ */}
          <Route path="/" element={<Index />} />

          {/* 会員登録ページ */}
          <Route path="/join" element={<Join />} />

          {/* ログインページ */}
          <Route path="/login" element={<Login />} />

          {/* 教会紹介ページ */}
          <Route path="/church1" element={<Church1 />} />

          {/* 掲示板リストページ */}
          <Route path="/posts" element={<PostList />} />

          {/* 掲示板詳細ページ */}
          <Route path="/posts/:postId" element={<PostDetail />} />

          {/* 掲示板編集ページ */}
          <Route path="/posts/:postId/edit" element={<PostEdit />} />

          {/* 掲示板新規作成ページ */}
          <Route path="/postCreate" element={<PostCreate />} />
        </Routes>
      </div>

      {/* フッターは常に表示 */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
