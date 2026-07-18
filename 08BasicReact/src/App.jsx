import { useState } from "react";

function App() {
  const [input, setinput] = useState("");

  function clen() {
    setinput("");
  }

  function back() {
    setinput(input.slice(0, -1));
  }

  function append(option){
    const num=Number(input);

    switch(option){
      case "square":
        setinput(String(num**2))
        break
      case 'root':
        setinput(String(Math.sqrt(num)))
        break
      case 'sin':
        setinput(String(Math.sin(num*Math.PI/180)))
        break
    }
  }


  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <div>
        <button onClick={clen}>C</button>
        <button onClick={back}>AC</button>
        <button onClick={()=>append('square')}>x²</button>
        <button onClick={()=>append('root')}>✓</button>
        <button onClick={()=>append('sin')}>sin</button>
      </div>
    </div>
  );
}

export default App;