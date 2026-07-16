import { useState } from "react";

function App() {
  const [color, setColor] = useState("#FF0000");
  const [history,sethistory]=useState(['#FF0000'])

  function changeColor() {
    let ni = "#";
    const np = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
      ni += np[Math.floor(Math.random() * 16)];
    }

    setColor(ni);

    sethistory((prev)=>{
      const update=[ni,...prev.filter((c)=> c !== ni)]
      return update.slice(0,6)
    })
  }

  function copy(){
    navigator.clipboard.writeText(color)
    alert(`${color} copied`)
  }

  return (
    <div className="container" 
    style={{backgroundColor:color,height:'100vh'}}>
      <h1>Random Color Generator</h1>
              <p>{color}</p>

      <div className="btn">
      <button onClick={changeColor}>Change Color</button>
      <button onClick={copy}>Copy</button>
      </div>
<div className="history">
{history.map((item, index) => {
  return (
    <div key={index}  className="btn2"
    style={{
    backgroundColor: item,
    margin: "10px",
    width: "150px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    marginTop:'2px'
      }} >
      {item}
    </div>
  );
})}
</div>
    </div>
  );
}

export default App;