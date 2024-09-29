import "./App.css";
import { useState } from "react";

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "https://i.gyazo.com/546ba7abc3b7e11e105b47737527bf39.png",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
};

function App() {
  const [result, setResult] = useState("");
  return (
    <>
      <h1>こんにちは</h1>
      <div>
        <h2>{quiz.text}</h2>
        <img src={quiz.image} width={200} />
        <div>
          {quiz.choices.map((choice, key) => (
            <button
              key={key}
              onClick={() => {
                setResult(choice.feedback);
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
        <div>{result}</div>
      </div>
    </>
  );
}

export default App;
