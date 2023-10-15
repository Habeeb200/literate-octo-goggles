import React, { useState } from 'react'
import "./Style.css"
function Counter() {
    const[number, setNumber] = useState(0)
    const increase = ()=>{
        setNumber(number+ 1)
    }
    const decrease = ()=>{
        if(number == 0){
            setNumber(0)
        }else{
            setNumber(number- 1)
        }
    }
    const reset =()=>{
        setNumber(0)
    }
  return (
    <div>
    <div className='container1'>
        <h1 style={{textAlign: "center", fontSize:"120px", marginBottom: "50px"}}>{number}</h1>
        <button className='btn btn-primary rounded-pill p-2 p-lg-3 ms-4 me-3 me-lg-4' onClick={increase}>Increement</button>
        <button className='btn btn-secondary rounded-pill p-2 p-lg-3 me-3 me-lg-4' onClick={decrease}>Decreement</button>
        <button className='btn btn-danger rounded-pill p-2 p-lg-3 ' onClick={reset}>Reset</button>
    </div>

    </div>
  )
}

export default Counter