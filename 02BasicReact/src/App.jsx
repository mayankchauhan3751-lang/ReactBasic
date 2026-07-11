import { useState } from "react";
// import Guss from "./guss";
  
function app(){

  const[counter,setcount]=useState(0)
  
  function add(){
    setcount(counter+1)
  }

  function remove(){
    if(counter >0){
    setcount(counter-1)

    }
  }
  return(
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <p>{counter}</p>
          <button onClick={add} className="add">+</button>
          <button onClick={reset} className="reset">Reset Game</button>
          <button onClick={remove} className="remove">-</button>
    </div>
  )
  function reset(){
    setcount(0)
  }
}

export default app;