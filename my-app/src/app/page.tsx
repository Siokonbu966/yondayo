'use client';

import { useState } from 'react';

type Post = {
  id: number;
  user: string;
  content: string;
  createdAt: string;
  likes: number;
};

// 日付表示ユーティリティ（今日 / 昨日 / YYYY/MM/DD）
const formatPostDate = (iso: string): string => {
  if (!iso) return '';
  const d = new Date(iso);
  const now = new Date();

  const makeMidnight = (dt: Date) =>
    new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const today = makeMidnight(now);
  const yesterday = new Date(today.getTime() - 86400000);
  const target = makeMidnight(d);

  if (target.getTime() === today.getTime()) return '今日';
  if (target.getTime() === yesterday.getTime()) return '昨日';

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}/${m}/${day}`;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: 'Alice',
      content: '最初の投稿です！',
      createdAt: new Date().toISOString(),
      likes: 2,
    },
    {
      id: 2,
      user: 'Bob',
      content: 'こんにちは世界',
      createdAt: new Date().toISOString(),
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
        createdAt: new Date().toISOString(),
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
            <div style={{ whiteSpace: 'pre-wrap', marginTop: 4 }}>{post.content}</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>
              {formatPostDate(post.createdAt)}
            </div>
            <div style={{ fontWeight: 600 }}>{post.user}</div>
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