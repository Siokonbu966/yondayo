'use client';

import { useState } from 'react';

type Post = {
  id: number;
  user: string;
  content: string;
  createdAt: string;
  likes: number;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: 'Alice',
      content: '最初の投稿です！',
      createdAt: new Date().toLocaleString(),
      likes: 2,
    },
    {
      id: 2,
      user: 'Bob',
      content: 'こんにちは世界',
      createdAt: new Date().toLocaleString(),
      likes: 0,
    },
  ]);
  const [newContent, setNewContent] = useState('');

  const addPost = () => {
    const trimmed = newContent.trim();
    if (!trimmed) return;
    setPosts(p => [
      {
        id: Date.now(),
        user: 'You',
        content: trimmed,
        createdAt: new Date().toLocaleString(),
        likes: 0,
      },
      ...p,
    ]);
    setNewContent('');
  };

  const likePost = (id: number) => {
    setPosts(p =>
      p.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', fontFamily: 'sans-serif', padding: 16 }}>
      {/* 追加: 投稿フォーム */}
      <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, marginTop: 24 }}>
        <textarea
          value={newContent}
          onChange={e => setNewContent(e.target.value)}
          placeholder="いまどうしてる？"
          rows={3}
          style={{ width: '100%', resize: 'vertical', padding: 8 }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>
            {newContent.trim().length}/140
          </span>
          <button
            onClick={addPost}
            disabled={!newContent.trim() || newContent.trim().length > 140}
            style={{
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              padding: '6px 16px',
              borderRadius: 4,
              cursor: 'pointer',
              opacity: !newContent.trim() || newContent.trim().length > 140 ? 0.5 : 1,
            }}
          >
            投稿
          </button>
        </div>
      </div>
      {/* 追加: タイムライン */}
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 24, display: 'grid', gap: 12 }}>
        {posts.map(post => (
          <li
            key={post.id}
            style={{
              border: '1px solid #e5e7eb',
              padding: 12,
              borderRadius: 8,
              background: '#fff',
            }}
          >
            <div style={{ fontWeight: 600 }}>{post.user}</div>
            <div style={{ whiteSpace: 'pre-wrap', marginTop: 4 }}>{post.content}</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>
              {post.createdAt}
            </div>
            <button
              onClick={() => likePost(post.id)}
              style={{
                marginTop: 8,
                fontSize: 12,
                background: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: 4,
                padding: '4px 10px',
                cursor: 'pointer',
              }}
            >
              ❤️ {post.likes}
            </button>
          </li>
        ))}
        {posts.length === 0 && <li>まだ投稿がありません。</li>}
      </ul>
    </div>
  );
}