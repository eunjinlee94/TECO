import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from './pages/Join';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 会員登録ページ */}
          <Route path="/join" element={<Join />} />
          {/* ここに他のページも追加可能 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
