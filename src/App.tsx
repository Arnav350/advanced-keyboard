import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const input = useRef<HTMLInputElement>(null!);

  const [message, setMessage] = useState<string>("");
  const [shifted, setShifted] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);

  function handlePress(event: any) {
    const keys = document.querySelectorAll<HTMLDivElement>(".key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.backgroundColor = "#333";
      if (keys[i].innerHTML === event.key) {
        keys[i].style.backgroundColor = "#555";
      }
    }
  }

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="container" onKeyDown={(event: any) => handlePress(event)}>
      <input
        type="text"
        value={message}
        className="input"
        ref={input}
        onChange={(event: any) => setMessage(event.target.value)}
      />
      <div className="keyboard">
        <div className="row">
          <div className="key">`</div>
          <div className="key">1</div>
          <div className="key">2</div>
          <div className="key">3</div>
          <div className="key">4</div>
          <div className="key">5</div>
          <div className="key">6</div>
          <div className="key">7</div>
          <div className="key">8</div>
          <div className="key">9</div>
          <div className="key">0</div>
          <div className="key">-</div>
          <div className="key">=</div>
          <div className="key key__backspace">Backspace</div>
        </div>
        <div className="row">
          <div className="key key__tab">Tab</div>
          <div className="key">q</div>
          <div className="key">w</div>
          <div className="key">e</div>
          <div className="key">r</div>
          <div className="key">t</div>
          <div className="key">y</div>
          <div className="key">u</div>
          <div className="key">i</div>
          <div className="key">o</div>
          <div className="key">p</div>
          <div className="key">{"["}</div>
          <div className="key">{"]"}</div>
          <div className="key">\</div>
        </div>
        <div className="row">
          <div className="key key__caps">CapsLock</div>
          <div className="key">a</div>
          <div className="key">s</div>
          <div className="key">d</div>
          <div className="key">f</div>
          <div className="key">g</div>
          <div className="key">h</div>
          <div className="key">j</div>
          <div className="key">k</div>
          <div className="key">l</div>
          <div className="key">;</div>
          <div className="key">'</div>
          <div className="key key__enter">Enter</div>
        </div>
        <div className="row">
          <div className="key key__shift-left">Shift</div>
          <div className="key">z</div>
          <div className="key">x</div>
          <div className="key">c</div>
          <div className="key">v</div>
          <div className="key">b</div>
          <div className="key">n</div>
          <div className="key">m</div>
          <div className="key">,</div>
          <div className="key">.</div>
          <div className="key">/</div>
          <div className="key key__shift-right">Shift</div>
        </div>
        <div className="row">
          <div className="key key__filler"></div>
          <div className="key key__space"> </div>
          <div className="key key__filler"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
