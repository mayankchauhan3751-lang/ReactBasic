import { useState,useEffect } from "react"

function app(){
    const [hours,sethour]=useState('')
    const [min,setmin]=useState('')
    const [sec,setSec]=useState('')

  function updateclock(){

  const now=new Date();
  const hour=String(now.getHours()).padStart(2,"0") 
  const min=String(now.getMinutes()).padStart(2,'0')
  const sec=String(now.getSeconds()).padStart(2,'0')

  sethour(hour)
  setmin(min)
  setSec(sec)
}

useEffect(()=>{
  updateclock()

  const interval=setInterval(updateclock,1000)
  return ()=>clearInterval(interval)
},[])
  return(
    <div className="container">

    <div className="pp">
      <div className="timebox">
        <div className="box">{hours} :</div>
        <label>Hours </label>
      </div>

      <div className="timebox">
        <div className="box">{min} :</div>
        <label>Mins</label>
      </div>
      <div>
        <div className="box">{sec}</div>
        <label>Sec</label>
      </div>
    </div>

    </div>
  )
}

export default app