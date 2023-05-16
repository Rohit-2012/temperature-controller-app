import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [temp, setTemp] = useState(0)

  let color = 'rgb(17, 111, 205)'
  if (temp >= 20 && temp <= 30){
    color = 'yellow'
  }else if (temp> 30 && temp <= 50){
    color ='orange'
  }else if(temp>50){
    color ='red'
  }
  
  return (
    <div className ='mainBox'>
      <div className='display' style={{backgroundColor:color}}>
        <h1>{temp}&#176;C</h1>
      </div>
      <div className='controls'>
        <button className='btn' onClick={()=>setTemp(temp+1)}>+</button>
        <button className='btn' onClick={()=>setTemp(temp-1)}>-</button>
      </div>
    </div>
  );
}
