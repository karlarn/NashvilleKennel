import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState(0)
  
    const handleClick = () => {
      //good practice:
      //make a copy of state, modify it, and then setState to the copy
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
    }
  
    return (
      <>
        <h3>Welcome, {yourName} </h3>
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click Me</button>
        {/* <div> 
           <input type="checkbox" id="myCheck" onChange="needs a function"></input>
           <label>did you check this box?</label><br/>
           <input type="checkbox" checked*cant change the state of it if you do this* id="myCheck" onChange="Needs a function" ></input>
           <label>what about this box?</label><br/>
           

        </div> */}

      </>
    )
  }