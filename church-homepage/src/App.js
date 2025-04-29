// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Join from './pages/Join';
import Login from './pages/Login';
import PostCreate from './pages/posts/PostCreate';  
import PostList from './pages/posts/PostList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* インデックスページ */}
        <Route path="/" element={<Index />} />
        {/* 会員登録ページ */}
        <Route path="/join" element={<Join />} />
        {/* ログインページ */}
        <Route path="/login" element={<Login />} />
        {/* 投稿作成ページ */}
        <Route path="/postCreate" element={<PostCreate />} />
        {/* 投稿リストページ */}
        <Route path="/posts" element={<PostList />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
