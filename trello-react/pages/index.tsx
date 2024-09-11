import React, { useEffect } from "react";
import App from "./App"; // App.tsx をインポート
import "../src/app/index.css"; // パスが正しいか確認
import "../src/app/globals.css"; // グローバルスタイルが適用されているか確認

// index.tsx では App.tsx を表示
const Index = () => {
  return <App />;
};

export default Index;

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
    </div>
  );
};

function AApp() {
  useEffect(() => {
    // クライアントサイドでのみ実行される処理をここに記述
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const root = document.getElementById("root");
      // root 要素を使った他の処理があればここに追加
    }
  }, []);

  return (
    <div>
      {/* 他のJSXの部分をここに追加 */}
      <Home />
    </div>
  );
}

//export default AApp;
