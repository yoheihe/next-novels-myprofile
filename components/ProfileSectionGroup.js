import Image from "next/image";

const ProfileSectionGroup = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <Image
          src="/img/profile-main.png"
          alt="Profile Image"
          width={150}
          height={150}
        />
      </div>
      <h1 className="profile-name">湯元みこと</h1>
      <h3 className="profile-bio">
        歴史とファンタジーが大好き<br />
        趣味は遺跡巡りと朝カフェ
      </h3>
    </div>
  );
};

export default ProfileSectionGroup;
