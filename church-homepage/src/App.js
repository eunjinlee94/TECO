import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from './pages/Join';
import Login from './pages/Login';
import Index from './pages/Index';
import Church1 from './pages/Church1';
import Church2 from './pages/Church2';
import Church3 from './pages/Church3';
import Header from './components/Header';
import Footer from './components/Footer'; // ★ フッター追加
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* ヘッダーを常に表示 */}
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          {/* 他のページもここに追加可能 */}
          <Route path="/church1" element={<Church1 />} />
          <Route path="/church2" element={<Church2 />} />
          <Route path="/church3" element={<Church3 />} />
        </Routes>
      </div>

      {/* フッターを常に表示 */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
