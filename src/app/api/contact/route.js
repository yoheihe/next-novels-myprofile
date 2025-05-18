// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Nodemailer設定（Gmailを使う場合）
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Gmailアドレス
      pass: process.env.EMAIL_PASS, // アプリパスワード（通常のパスワードは使えません）
    },
  });

  const mailOptions = {
    from: `"お問い合わせフォーム" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // 自分自身に送信
    subject: "【お問い合わせ】新しいメッセージが届きました",
    text: `
名前: ${name}
メールアドレス: ${email}
メッセージ:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
