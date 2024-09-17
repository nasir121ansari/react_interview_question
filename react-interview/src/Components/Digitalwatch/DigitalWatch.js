import React, { useState, useEffect} from 'react';

const DigitalWatch = () => {
    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false);

    
useEffect(() => {
    let interval = null
   if(isRunning) {
      interval = setInterval(() => {
       setTime((prevTime) => prevTime + 1)
 
      },1000)
   }else if(!isRunning && time !==0){
      clearInterval(interval)
   }
 
   return () => clearInterval(interval)
 
 },[isRunning,time])
 
 const format = (time) => {
     const minutes = Math.floor(time/60)
     const second = time % 60
     return `${String(minutes).padStart(2,"0")} : ${String(second).padStart(2,"0")}`
 }
   
   const handleStart = () =>{
     setIsRunning(true)
   }
   const handlePause = () => {
     setIsRunning(false)
   }
 
   const handleResume = () =>{
     setIsRunning(true)
   }
 
   const handleReset = () => {
     setIsRunning(false)
     setTime(0)
   }
 
 
  return (
    <div>
     <h1>{format(time)}</h1>
     <button onClick={handleStart}>Start</button>
     <button onClick={handlePause}>Pause</button>
     <button onClick={handleResume}>Resume</button>
     <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default DigitalWatch