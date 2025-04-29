// src/pages/posts/PostDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/postDetail.css";

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  // TODO: サーバーから取得予定（仮データ）
  const dummyPost = {
    title: "サンプル投稿タイトル",
    author: "管理者",
    date: "2025-04-29",
    content: "これはサンプルの投稿内容です。実際にはサーバーからデータを取得します。",
    imageUrl: null,
  };

  // 수정 버튼 클릭 시
  const handleEdit = () => {
    navigate(`/posts/${postId}/edit`);
  };

  // 삭제 버튼 클릭 시 (확인 알림 포함)
  const handleDelete = () => {
    if (window.confirm("この投稿を本当に削除しますか？")) {
      // TODO: サーバーに削除リクエスト送信
      alert("削除しました。（仮）");
      navigate("/posts");
    }
  };

  return (
    <div className="post-detail-container">
      {/* タイトル */}
      <h2 className="post-title">{dummyPost.title}</h2>

      {/* メタ情報（作成者・日付） */}
      <div className="post-meta">
        <span>作成者: {dummyPost.author}</span> | <span>作成日: {dummyPost.date}</span>
      </div>

      {/* 本文 */}
      <div className="post-content">
        {dummyPost.content}
      </div>

      {/* 添付画像 */}
      {dummyPost.imageUrl && (
        <div className="post-image">
          <img src={dummyPost.imageUrl} alt="添付画像" />
        </div>
      )}

      {/* 수정・삭제 버튼 */}
      <div className="post-actions mt-4">
        <button className="btn btn-primary me-2" onClick={handleEdit}>編集</button>
        <button className="btn btn-danger" onClick={handleDelete}>削除</button>
      </div>
    </div>
  );
}
