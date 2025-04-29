// src/pages/posts/PostEdit.jsx
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "../../css/postDetail.css";

export default function PostEdit() {
  // URLから投稿IDを取得
  const { postId } = useParams();

  // Editorへの参照
  const editorRef = useRef();

  // 仮の投稿データ（後でサーバーから取得する予定）
  const dummyPost = {
    title: "サンプル投稿タイトル",
    author: "管理者",
    content: "これはサンプルの編集内容です。実際にはサーバーから取得します。",
  };
  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedContent = editorRef.current.getInstance().getMarkdown();

    // ここでサーバーに更新リクエストを送信する予定
    console.log("修正後タイトル:", e.target.title.value);
    console.log("修正後本文:", editedContent);
    alert("投稿が修正されました（仮）！");
  };

  return (
    <div className="post-edit-container">
      {/* 編集画面タイトル */}
      <h2 className="edit-title">投稿を修正</h2>

      {/* 編集フォーム */}
      <form onSubmit={handleSubmit}>
        {/* タイトル入力 */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">タイトル</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            defaultValue={dummyPost.title}
            required
          />
        </div>

        {/* 編集エディター */}
        <div className="mb-3">
          <label className="form-label">本文</label>
          <Editor
            ref={editorRef}
            initialValue={dummyPost.content}
            previewStyle="vertical"
            height="400px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
          />
        </div>

        {/* 送信ボタン */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">修正を保存</button>
        </div>
      </form>
    </div>
  );
}
