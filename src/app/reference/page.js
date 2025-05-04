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
    title: '水滸伝',
    author: '北方謙三',
    year: 2000,
    publisher: '集英社',
  },
  {
    title: '華麗なる一族',
    author: '山崎豊子',
    year: 1973,
    publisher: '新潮社',
  },
  {
    title: '十二国記',
    author: '小野不由美',
    year: 1992,
    publisher: '講談社',
  },
  {
    title: '坂の上の雲',
    author: '司馬遼太郎',
    year: 1999,
    publisher: '文春文庫',
  },
  {
    title: '琥珀の夏',
    author: '辻村深月',
    year: 2021,
    publisher: '文藝春秋',
  },
  {
    title: '春の道標',
    author: '黒井千次',
    year: 1981,
    publisher: '新潮社',
  },
  {
    title: 'オズの魔法使い',
    author: 'ライマン・フランク・ボーム',
    year: 2012,
    publisher: '新潮文庫',
  },
  {
    title: '復活の日',
    author: '小松左京',
    year: 1975,
    publisher: 'KADOKAWA',
  },
  {
    title: '考古学ハンドブック',
    author: '小林達雄',
    year: 2007,
    publisher: '新書館',
  },
  {
    title: 'コンスタンティノープルに陥落',
    author: '塩野七生',
    year: 1983,
    publisher: '新潮社',
  },
  {
    title: '邪馬台国と古代日本',
    author: '千田稔',
    year: 2000,
    publisher: 'NHKブックス',
  },
  {
    title: '狼と香辛料',
    author: '支倉凍砂',
    year: 2007,
    publisher: '電撃文庫',
  },
  {
    title: 'リヴィエラを撃て',
    author: '高村薫',
    year: 1992,
    publisher: '新潮社',
  },
  {
    title: '最後の一葉',
    author: 'オー・ヘンリー',
    year: 2015,
    publisher: '新潮文庫',
  },
  
  {
    title: 'ヴェニスの商人',
    author: 'ウィリアム・シェイクスピア',
    year: 2002,
    publisher: 'ちくま文庫',
  },
  {
    title: 'カラマーゾフの兄弟',
    author: 'ドストエフスキー',
    year: 2006,
    publisher: '光文社古典新訳文庫',
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

  const filteredBooks = books.filter((book) => {
    const keywords = query.trim().toLowerCase().split(/\s+/); // 空白でキーワードを分割
  
    // 全てのキーワードが、いずれかの値に含まれるかどうかをチェック
    return keywords.every((keyword) =>
      Object.values(book).some((value) =>
        String(value).toLowerCase().includes(keyword)
      )
    );
  });

  return (
    <main className="main-global"> 
      <CommonButton />

      <div className="booklist-container">
        <div>
          <h2>好きな書籍リスト</h2>

          {/* 検索フォーム */}
          <div className="search-form">
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
                <th>出版元</th>
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
                  <td colSpan="4" className="no-results">
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
