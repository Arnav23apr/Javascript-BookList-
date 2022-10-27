/* eslint no-eval: 0 */

import React from 'react'
import "./App.css"
import { useState } from 'react'

function App() {
  const[calc,setCalc]= useState("")
  const [result,setResult]= useState("")
  const ops=['/','*','+','-','.']
 
   function handleKeyPress(e) {
    
    var key = e.keyCode || e.charCode
    var evtobj = window.event? e : e
      if (evtobj.keyCode === 187 && evtobj.shiftKey) {
        updateCalc("+")  
      }
      if (evtobj.keyCode ===56 && evtobj.shiftKey) {
        updateCalc("*")  
      }
      if (evtobj.keyCode === 189) {
        updateCalc("-")  
      }
      if (evtobj.shiftKey||evtobj.ctrlKey||evtobj.altKey) {
        return  
        }
      if (evtobj.keyCode ===191) {
        updateCalc("/")  
      }
      if (evtobj.keyCode === 190) {
        updateCalc(".")  
      }
      if (evtobj.keyCode === 190) {
        updateCalc(".")  
      }
      
      for (let i=48; i<58;i++){
        if (evtobj.keyCode ===i) {
          updateCalc(e.key)
          }
        } 

    if(key===8){
      deleteLast()
      }
    if(key=== 13){
      calculate()
    }
    if(key===27){
      allclear()
    }
    }
  const updateCalc=(value)=>{
    if(
      (ops.includes(value) && calc==='')||
      (ops.includes(value) && ops.includes(calc.slice(-1))
      ))
      {
        return;
      }
      setCalc(calc+value)
      if(!ops.includes(value)){
        setResult(eval(calc+value).toString());
         }
    }
  const createDigits= ()=>{
    var digits=[]
    for (let i=1; i<10;i++){
      digits.push(
        <button 
        onClick={()=> updateCalc(i.toString())} 
        key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate=()=>{
    setCalc(eval(calc).toString())
  }
  const deleteLast=()=>{
    if(calc===''){
      return;
    }
    const value= calc.slice(0,-1)
    setCalc(value)
  }
  const allclear = () => {
    setCalc('') 
    setResult('')
  };

  return (
    <div className="App" id="inner" tabIndex="-1" onKeyDown=  {(e)=>handleKeyPress(e)}>
      <div className='calculator' >
        
        <div className='display'  >
         {result ? <span>({result})</span> : ''}
         {calc || "0"} 
          </div> 
          <div className='operators'>
          <button onClick={allclear}>AC</button>
            <button onClick={()=>updateCalc('/')}>/</button>
            <button onClick={()=>updateCalc('*')}>*</button>
            <button onClick={()=>updateCalc('+')}>+</button>
            <button onClick={()=>updateCalc('-')}>-</button>
            <button onClick={deleteLast}>DEL</button>
          </div>
          
          <div className='digits'>
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          
          </div>
          </div>
          
          </div>

  )
}

export default App