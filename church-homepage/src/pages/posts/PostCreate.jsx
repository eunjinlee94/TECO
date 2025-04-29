import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import "../../css/postCreate.css"; 
import { useNavigate } from 'react-router-dom';

export default function PostCreate() {
  const editorRef = useRef();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editorRef.current.getInstance().getMarkdown();

    console.log({
      title,
      author,
      content,
      file
    });

    alert('投稿が完了しました！');
    navigate('/posts'); // 게시판 리스트 페이지로 이동시키는거야. (나중에 수정 가능)
  };

  return (
    <div className="container post-create">
      <div className="form-container">
        <div className="form-title">게시글 작성</div>
        <form onSubmit={handleSubmit}>
          {/* タイトル */}
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">タイトル</label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              placeholder="タイトルを入力してください"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* 作成者 */}
          <div className="mb-3">
            <label htmlFor="postAuthor" className="form-label">作成者</label>
            <input
              type="text"
              className="form-control"
              id="postAuthor"
              placeholder="作成者の名前を入力してください"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          {/* 内容(エディター) */}
          <div className="mb-3">
            <label className="form-label">内容</label>
            <Editor
              ref={editorRef}
              initialValue="ここに内容を入力してください"
              previewStyle="vertical"
              height="400px"
              initialEditType="wysiwyg"
              useCommandShortcut={true}
            />
          </div>

          {/* 登録ボタン */}
          <button type="submit" className="btn btn-primary btn-submit">登録する</button>
        </form>
      </div>
    </div>
  );
}
