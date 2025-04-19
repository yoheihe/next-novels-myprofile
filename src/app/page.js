'use client'
import * as React from 'react';


//コンポーネント使用
import CommonButton from "../../components/CommonButton";
import ProfileSection from '../../components/ProfileSectionGroup';
import CommonSocialIcon from "../../components/CommonSocialIcon";
import Sakura from '../../components/Sakura'

export default function TopPage() {

  return (
    <main className="main-global">
      <Sakura />

      <div className="top-container">
        <div className="topText">
          <h1>Welcome to My Page</h1>
        </div>
      </div>
      <CommonButton />

      <ProfileSection />

      <CommonSocialIcon />

    </main>
  );
}
