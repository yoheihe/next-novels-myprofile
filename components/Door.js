'use client';
import React, { useState, useEffect } from 'react';
import styles from './door.module.css';

const Door = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true); // ページロード後に扉を開く
      setTimeout(() => {
        setHidden(true); // アニメーション後に完全に非表示
      }, 2000); // 扉が開く時間と同じ
    }, 500);
  }, []);


  const handleUnlock = () => {
    setUnlocked(true); // 鍵のアニメーション開始
    setTimeout(() => {
      setOpen(true); // ドアが開く
      setTimeout(() => {
        setHidden(true); // 完全に非表示
      }, 2000);
    }, 1000); // 鍵が解除された後にドアが開く
  };

  return (
    !hidden && ( // hidden が true になったらコンポーネントごと削除
      <div className={`${styles.doorContainer} ${open ? styles.open : ''}`}>
          <div className={styles.lock} onClick={handleUnlock}>
            🔒
          </div>

        <div className={styles.doorLeft}></div>
        <div className={styles.doorRight}></div>
      </div>
    )
  );
};

export default Door;
