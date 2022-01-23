import './App.css';
import { useEffect, useRef, useState } from "react";
const tr46 = require("tr46");

function App() {
  const imgEl = useRef(null);
  const canvasEl = useRef(null);
  const [punycode, setPunycode] = useState("");
  const [registration, setRegistration] = useState("");
 
  /*const onLoadImg = () => {
    const canvas = canvasEl.current;
    const imgWidth = imgEl.current.width;
    const imgHeight = imgEl.current.height;

    canvas.width = imgWidth;
    canvas.height = imgHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(imgEl.current, 0, 0);

    ctx.font = "150px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(tr46.toUnicode(punycode).domain, imgWidth / 2, imgHeight / 2);

    ctx.font = "20px sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.fillText(punycode, imgWidth - 25, imgHeight - 55);
    ctx.fillText(`Registered on ${registration}`, imgWidth - 25, imgHeight - 30);
  };*/

  const onSubmit = e => {
    e.preventDefault();

    const canvas = canvasEl.current;
    const imgWidth = imgEl.current.width;
    const imgHeight = imgEl.current.height;

    canvas.width = imgWidth;
    canvas.height = imgHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(imgEl.current, 0, 0);

    ctx.font = "150px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.fillText(tr46.toUnicode(punycode).domain, imgWidth / 2, imgHeight / 2);

    ctx.font = "20px sans-serif";
    ctx.textAlign = "right";  
    ctx.fillText(punycode, imgWidth - 25, imgHeight - 55);
    ctx.fillText(`Registered on ${registration}`, imgWidth - 25, imgHeight - 30);
  }

  return (
    <div className="App">
     <form onSubmit={onSubmit}>
       <label>
          Punycode:
          <input type="text" value={punycode} onChange={e => setPunycode(e.target.value)} />
        </label>

        <label>
          Registered on:
          <input type="text" value={registration} onChange={e => setRegistration(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
     </form> 
      <canvas ref={canvasEl}></canvas>
      <div style={{ display: "none" }}>
        <img
          src="./nmcframe.png"
          ref={imgEl}
          alt="nmcframe"
        />
      </div>
    </div>
  );
}

export default App;
