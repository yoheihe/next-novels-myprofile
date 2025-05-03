'use client';
import React, { useState } from 'react';

//コンポーネント使用
import CommonButton from "../../../components/CommonButton";

const books = [
  {
    title: '我らが隣人の犯罪',
    author: '宮部みゆき',
    year: 1990,
    publisher: '文春文庫',
  },
  {
    title: '椿姫',
    author: 'アレクサンドル・デュマ・フィス',
    year: 1971,
    publisher: '岩波文庫',
  },
  // 他の書籍をここに追加できます
];

const BookList = () => {
  const [query, setQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    Object.values(book).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <main>

      <CommonButton />

      <div className="booklist-container">
        <div>
          <h2>書籍リスト</h2>

          {/* 🔍 検索フォーム */}
          <input
            type="text"
            placeholder="キーワードで検索（タイトル、著者、出版社など）"
            className="book-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* 📚 書籍テーブル */}
          <table className="book-table">
            <thead>
              <tr>
                <th>タイトル</th>
                <th>著者</th>
                <th>発刊年</th>
                <th>出版社</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>{book.publisher}</td>
                </tr>
              ))}
              {filteredBooks.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', color: '#777' }}>
                    該当する書籍は見つかりませんでした。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default BookList;
