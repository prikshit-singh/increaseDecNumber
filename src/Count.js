import { useState } from "react";
import React from 'react';
import './count.css';
function Count() {
  let [num,newnum]=useState(0)
  // let num=0;
function plus(){
newnum(num+1);
}
function minus(){
  newnum(num-1);
  }
    return (
      <>
     <h1 className="number">{num}</h1>
     <div className="btn1">
     <button className="btn" onClick={plus}>Add</button>
     <button className="btn" onClick={minus}>Minus</button>
     </div>
      </>
    );
  }
  
  export default Count;