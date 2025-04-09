import Image from "next/image";

const text = "ヤクルトスワローズファン。真夏に神宮球場で応援するのが好き。";

const AboutTextGroup = () => {
  return (
<div>
        <div>
        <div className="about-profile-image">
          <Image
            src="/profile-baseball.png"
            alt="Baseball Image"
            width={150}
            height={150}
          />
        </div>
        <div>
        <h3>
        {text.split("。").map((sentence, index) =>
          sentence ? (
            <span key={index}>
              {sentence}。
              <br />
            </span>
          ) : null
        )}
      </h3>
        </div>
        </div>
        <div></div>
        <div></div>

      </div>
  );
};

export default AboutTextGroup;