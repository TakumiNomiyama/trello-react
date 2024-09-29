import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      id: crypto.randomUUID(),
      text: "Webコース",
    },
    {
      id: crypto.randomUUID(),
      text: "iphoneコース",
    },
    {
      id: crypto.randomUUID(),
      text: "Gameコース",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <header>
        <div className="header-title">Trello?</div>
      </header>
      <div className="main-container">
        <div className="list-container">
          <div className="list-header">ギークサロン</div>
          <div className="cards-container">
            {cards.map((card) => (
              <div className="card" key={card.id}>
                <div className="todo">{card.text}</div>
                <div
                  className="delete"
                  onClick={() => {
                    const updatedCards = cards.filter((tempCard) => {
                      return tempCard.id !== card.id;
                    });
                    setCards(updatedCards);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="list-footer">
            <div className="input-container">
              <input
                type="text"
                className="input-todo"
                value={inputValue}
                onInput={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <div
                className="input-button"
                onClick={() => {
                  if (inputValue === "") return;
                  setCards([
                    ...cards,
                    { id: crypto.randomUUID(), text: inputValue },
                  ]);
                  setInputValue("");
                }}
              >
                追加
              </div>
            </div>
          </div>
        </div>
        <div className="list-container">
          <div className="list-header">大学</div>
          <div className="cards-container">
            <div className="card">
              <div className="todo">これをやる</div>
              <div className="delete"></div>
            </div>
            <div className="card">
              <div className="todo">それをやる</div>
              <div className="delete"></div>
            </div>
          </div>
          <div className="list-footer">＋カードを追加</div>
        </div>
      </div>
    </>
  );
}

export default App;
