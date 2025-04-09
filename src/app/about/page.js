'use client'
import * as React from 'react';
import Image from 'next/image';

//コンポーネント使用
import ButtonGroup from "../../../components/ButtonGroup";
import SocialIcons from "../../../components/SocialIconGroup";

export default function AboutPage() {
  return (
    <main className="main-global">

      <ButtonGroup />

      <div className='about-profile'>
        <div className="profile-image">
          <Image
            src="/profile-main.png"
            alt="Profile Image"
            width={150}
            height={150}
          />
        </div>

        <div>
          <h3 className='about-text'>大学在学中に劇団ひまわりに入団。劇団時代に脚本作成を行い、文章を書くようになる。幼少期は全く本を読まず国語の成績は中学まで偏差値30。高校受験を契機に読書をするようになる。現在は小説投稿サイトカクヨムに小説を投稿中。</h3>
        </div>
      </div>

      <div className="about-profile-container">

        <div className="about-profile-item">
          <div className="about-profile-image">
            <Image
              src="/img/profile-item-baseball.png"
              alt="Baseball Image"
              width={150}
              height={150}
            />
          </div>
          <h3 className="about-profile-text">
            ヤクルトスワローズファン。真夏に神宮球場で応援するのが好き。
          </h3>
        </div>

        <div className="about-profile-item">
          <div className="about-profile-image">
            <Image
              src="/img/profile-item-haniwa.png"
              alt="Haniwa Image"
              width={150}
              height={150}
            />
          </div>
          <h3 className="about-profile-text">
            文学部史学地理学科専攻。考古学に興味があり遺跡発掘に参加。
          </h3>
        </div>

        <div className="about-profile-item">
          <div className="about-profile-image">
            <Image
              src="/img/profile-item-mangekyo.png"
              alt="Mangekyo Image"
              width={150}
              height={150}
            />
          </div>
          <h3 className="about-profile-text">
            都内のデイケア、老人ホームを中心に活動。朗読、落語を披露しています。
          </h3>
        </div>

        <div className="about-profile-item">
          <div className="about-profile-image">
            <Image
              src="/img/profile-item-jogging.png"
              alt="Jogging Image"
              width={150}
              height={150}
            />
          </div>
          <h3 className="about-profile-text">
            休みの日の午前中に河川敷を走ってます。ジョギング後の昼寝が最高。
          </h3>
        </div>

      </div>


      <SocialIcons />

    </main>
  );
}