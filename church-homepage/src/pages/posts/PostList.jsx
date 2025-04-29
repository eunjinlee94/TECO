// src/pages/posts/PostList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/postList.css"; 

// 임시 게시글 더미 데이터
const dummyPosts = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: `テスト投稿 ${i + 1}`,
  author: "管理者",
  date: "2025-04-29",
}));

export default function PostList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 현재 페이지 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goFirstPage = () => setCurrentPage(1);
  const goLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h2>掲示板</h2>
        <Link to="/postCreate" className="btn btn-primary">新規投稿</Link>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>番号</th>
            <th>タイトル</th>
            <th>作成者</th>
            <th>作成日</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                {/* 제목을 누르면 상세페이지 이동 */}
                <Link to={`/posts/${post.id}`} className="post-title-link">
                  {post.title}
                </Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button onClick={goFirstPage} disabled={currentPage === 1}>
          最初へ
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}

        <button onClick={goLastPage} disabled={currentPage === totalPages}>
          最後へ
        </button>
      </div>
    </div>
  );
}
