"use client"
import { useState } from "react"

// コンポーネント使用
import ButtonGroup from "../../../components/ButtonGroup";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false); // ✅ プライバシーポリシーの同意チェック

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agree) {
            alert("プライバシーポリシーに同意してください");
            return;
        }

        try {
            const response = await fetch("xxx", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            alert("メッセージを送信しました");

            // 送信後にフォームをリセット
            setName("");
            setEmail("");
            setMessage("");
            setAgree(false);
        } catch (err) {
            alert("メッセージの送信が失敗しました");
        }
    };

    return (
        <main className="main-global">
            <ButtonGroup />

            <div className="contact-container">
                <h1 className="contact-title">お問い合わせ</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="お名前"
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="メールアドレス"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="メッセージ"
                        rows="5"
                        required
                    ></textarea>

                    {/* ✅ プライバシーポリシーの埋め込み */}
                    <div className="privacy-policy-box">
                        <h3>プライバシーポリシー</h3>
                        <p>
                            当サイトでは、お問い合わせフォームを通じて収集した個人情報を適切に管理し、
                            第三者に提供することはありません。また、ご提供いただいた情報はお問い合わせへの対応以外の目的では使用いたしません。
                        </p>
                        <p>
                            詳細は当サイトの管理者までお問い合わせください。
                        </p>
                    </div>

                    {/* ✅ チェックボックス（必須） */}
                    <div className="privacy-policy">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        <label htmlFor="agree">プライバシーポリシーに同意します</label>
                    </div>

                    <button type="submit" className="contact-button">送信</button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
