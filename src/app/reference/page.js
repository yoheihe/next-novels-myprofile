'use client';
import React, { useState } from 'react';
import CommonButton from "../../../components/CommonButton";

const books = [
  {
    title: '我らが隣人の犯罪',
    author: '宮部みゆき',
    year: 1990,
    publisher: '文春文庫',
  },
  {
    title: '潮騒',
    author: '三島由紀夫',
    year: 1954,
    publisher: '新潮社',
  },
  {
    title: '椿姫',
    author: 'アレクサンドル・デュマ・フィス',
    year: 1971,
    publisher: '岩波文庫',
  },
  {
    title: '緋色の研究',
    author: 'コナン・ドイル',
    year: 1996,
    publisher: '新潮文庫',
  },
  // 他の書籍も追加可能
];

const BookList = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(inputValue);
  };

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

          {/* 検索フォーム */}
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="キーワードで検索（タイトル、著者、出版社など）"
              className="book-search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="book-search-button" onClick={handleSearch}>
              検索
            </button>
          </div>

          {/* 書籍テーブル */}
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
