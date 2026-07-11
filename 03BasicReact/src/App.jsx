import { useState } from "react"

function app(){

  const [result,setresult]=useState("")
  const [input,setinput]=useState("")
  const [attempt,setattempt]=useState(3)
  const [random] = useState(() => Math.floor(Math.random() * 10) + 1);



  function submit(){

    let guss=Number(input)


    if(guss===random){
      setresult(`Congrulation you won the game :${random}`)
      return
    }
    let remaning=attempt-1
    setattempt(remaning)
    if(remaning === 0){
      setresult(`Sorry! you loss the game ${random}`)
      return
    }
    else if(guss < random){
      setresult(`Gussing a high number `)
    }
    else{
      setresult(`Gussing a less number`)
    }
    setinput('')
  }


  return (
    <div>
      <h1>Gussing Number 1-10</h1>
      <input type="number"
      value={input}
      onChange={(e)=>{setinput(e.target.value)}}/>
      <button onClick={submit}>submit</button>
      <p>{result}</p>
      <p>Attempt :{attempt}</p>
    </div>
  )
}

export default app