import { useState } from "react"

function app(){

    const [display,setdisplay]=useState('')
    const [cal,setcal]=useState(false)

    function appendnumber(value){
        if(cal){
            setdisplay(value)
            setcal(false)
        }
        else{
            setdisplay(display+value)
        }
    }

    function cleardisplay(){
        setdisplay('')
        setcal(false)
    }

    function back(){
        setdisplay(display.slice(0,-1))
    }

    function equal(){
        setdisplay(eval(display))
        setcal(true)
    }

    function percentage(){
        setdisplay(display/100)
    }

    return (
        <div className="container">
            <div>
                <h1>Calculator</h1>
                <input type="text" value={display} readOnly/>
            </div>
            <div>
                <button onClick={cleardisplay} className="btn">C</button>
                <button onClick={back} className="btn">←</button>
                <button onClick={percentage} className="btn2">%</button>
                <button onClick={()=>appendnumber('/')} className="btn2">/</button>
                <br />
                <button onClick={()=>appendnumber('7')} className="btn">7</button>
                <button onClick={()=>appendnumber('8')} className="btn">8</button>
                <button onClick={()=>appendnumber('9')} className="btn">9</button>
                <button onClick={()=>appendnumber('*')} className="btn2">*</button>
                <br />
                <button onClick={()=>appendnumber('4')} className="btn">4</button>
                <button onClick={()=>appendnumber('5')} className="btn">5</button>
                <button onClick={()=>appendnumber('6')} className="btn">6</button>
                <button onClick={()=>appendnumber('-')} className="btn2">-</button>
                <br />
                <button onClick={()=>appendnumber('1')} className="btn">1</button>
                <button onClick={()=>appendnumber('2')} className="btn">2</button>
                <button onClick={()=>appendnumber('3')} className="btn">3</button>
                <button onClick={()=>appendnumber('+')} className="btn2">+</button>
                <br />
                <button onClick={()=>appendnumber('0')} className="btn">0</button>
                <button onClick={()=>appendnumber('00')} className="btn">00</button>
                <button onClick={()=>appendnumber('.')} className="btn">.</button>
                <button onClick={equal} className="btn">=</button>
            </div>
        </div>
    )
}
export default app