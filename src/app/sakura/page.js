import Image from 'next/image';
import Sakura from '../../../components/Sakura';

export default function Home() {
  return (
    <main style={{ position: "relative", height: "100vh", background: "#ffe4e1" }}>
      <Sakura />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "#333",
          fontSize: "2rem",
        }}
      >
        <h1>🌸 Welcome to My Sakura Page 🌸</h1>
      </div>
    </main>
  );
}
