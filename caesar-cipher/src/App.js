import React, { useState } from "react";
import "./App.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const App = props => {
  const [selectVal, setSelectVal] = useState("left");
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(3);

  const encrypt = _ => {
    const encryptedMessage = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        encryptedMessage.push(" ");
      } else {
        let a = 0;
        while (message[i] !== alphabet[a]) {
          a++;
        }
        if (selectVal === "left") {
          let newA = a - shift;
          if (newA < 0) {
            newA = 26 + newA;
          }
          encryptedMessage.push(alphabet[newA]);
        } else {
          let newA = a + shift;
          if (newA > 25) {
            newA = newA - 26;
          }
          encryptedMessage.push(alphabet[newA]);
        }
      }
    }
    console.log(encryptedMessage.join(""));
  };

  return (
    <div className="App">
      <h1>Caesar Cipher</h1>
      <select value={selectVal} onChange={e => setSelectVal(e.target.value)}>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <input
        type="number"
        value={shift}
        onChange={e => setShift(e.target.value)}
      />
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value.toUpperCase())}
      />
      <button onClick={encrypt}>Encrypt Message</button>
    </div>
  );
};

export default App;
