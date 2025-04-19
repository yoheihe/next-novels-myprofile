'use client'
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//コンポーネント使用
import CommonButton from "../../../components/CommonButton";
import CommonSocialIcon from "../../../components/CommonSocialIcon";
import Cat from '../../../components/Cat';
import Door from '../../../components/Door';

export default function WorksPage() {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // クリックで反転・元に戻す
  };

  return (
    <main className="main-global">
      <Door />



      <CommonButton />

      <h2 className="works-list">作品一覧</h2>

      <div className='works-container'>
        <div className="works-about-image">
          <Image
            src="/img/works-about-eraclock.png"
            alt="Works Eraclock Image"
            width={300}
            height={300}
            className={flipped ? 'flipped' : 'normal'}
            onClick={handleClick}
          />
        </div>

        <Link href="https://kakuyomu.jp/works/1177354054893959544" target="_blank" rel="noopener noreferrer" className="works-link">
          作品ページへ
        </Link>

        <h1 className="works-name">エーラ・クロッカ〜世界に居座する砂時計〜</h1>
        <h3 className="works-bio">
          グラジオス王国で王国騎士を目指していた青年タウラ・ヴィンスは、不治の呪いを受け王国騎士の資格を剥奪、さらに自身の声を失う。<br />
          失われたものを取り戻し、自分が受けた呪いを解くために、グラジオス王国の秘宝とされている砂時計（エーラ・クロッカ）の力を使おうとしたが、一千年前の王国にタイムスリップしていた。<br />
          仲間とともに時空を渡り、歴史改変を企む勢力と戦う、タイムスリップハイファンタジーです。<br />
        </h3>
      </div>

      <CommonSocialIcon />

    </main>
  );

}